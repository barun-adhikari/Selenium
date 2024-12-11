const {By, Key} = require('selenium-webdriver');

async function passwordReset(driver) {
    try {
        const forgotText = await driver.findElement(By.className('orangehrm-login-forgot'));
        const actions = await forgotText.findElement(By.className('orangehrm-login-forgot-header'));
        await actions.click()
        console.log('Forgot password clicked.');

        try {
            await driver.sleep(5000);
            const container = await driver.findElement(By.className('orangehrm-card-container'));
            const userNameInput = await container.findElement(By.name('username'));
            userNameInput.sendKeys("Admin123");
            console.log('User Name filled.');

            // Detecting button and clicking the button
            const confirmButton = container.findElement(By.className('orangehrm-forgot-password-button--reset'));
            confirmButton.click();
            console.log('Reset Password Button clicked.')
        } catch(error) {
            console.error('Error in detecting container:', error);
        }

        try {
            await driver.sleep(3000);
            const container = await driver.findElement(By.className('orangehrm-card-container'));
            const text = await container.findElement(By.className('orangehrm-forgot-password-title')).getText();
            // Checking if the text is same as the one planned.
            if(text === "Reset Password link sent successfully") {
                console.log(`${text}`);
            } else {
                console.log("There seems to be problem with text.")
            }
        } catch(error) {
            console.error('Error getting text from container.')
        }

    }catch(error) {
        console.error('Error during password Reset:', error)
    }

}
module.exports = passwordReset;