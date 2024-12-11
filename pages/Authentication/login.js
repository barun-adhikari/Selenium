const { By, until } = require('selenium-webdriver');

async function login(driver) {

    try {
        const logIn = await driver.findElement(By.className('orangehrm-login-form'));
        const logInCreds = await logIn.findElement(By.className('orangehrm-login-error'));
        const logInForm = await logIn.findElement(By.className('oxd-form'));

        let userNameText = '';
        let passwordText = '';

        if (logInCreds) {
            // The platform gives the default creds for testing purpose so scraping it and using it to fill the forms.
            const elements = await logInCreds.findElements(By.className('oxd-text oxd-text--p'));
            if (elements.length > 1) {
                const userNameRaw = await elements[0].getText();
                const passwordRaw = await elements[1].getText();
        
                userNameText = userNameRaw.split(":")[1]?.trim() || '';
                passwordText = passwordRaw.split(":")[1]?.trim() || '';

                console.log(userNameText);
                console.log(passwordText);
            } else {
                console.log('Not enough elements found for credentials.');
                // If by any chance there is not creds , using default creds
                userNameText = 'Admin';
                passwordText = 'admin123';

            }
        }
        await driver.sleep(5000);

        if (logInForm && userNameText && passwordText) {
            const inputFields = await logInForm.findElements(By.className('oxd-input oxd-input--active'));
            if (inputFields.length > 1) {
                await inputFields[0].sendKeys(userNameText);
                await inputFields[1].sendKeys(passwordText);
                console.log('Login form filled.');
            } else {
                console.log('Not enough input fields in the form.');
            }
        } else {
            console.log('Login form or credentials are missing.');
        }
        await driver.sleep(5000);

        try {
            const loginButton = await driver.wait(
                until.elementLocated(By.className('orangehrm-login-button')),
                10000 
            );
            await driver.wait(until.elementIsEnabled(loginButton), 5000);
            await loginButton.click();
            console.log('Login button clicked successfully.');
        } catch (error) {
            console.error('Error clicking the login button:', error);
        }
    } catch (error) {
        console.error('Error during the login process:', error);
    }

}

module.exports = login;
