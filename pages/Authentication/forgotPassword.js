const {By} = require('selenium-webdriver');


async function passwordReset(driver) {
    try {
        const forgotText = await driver.findElement(By.className('orangehrm-login-forgot'));
        const actions = await forgotText.findElement(By.className('orangehrm-login-forgot-header'));
        await actions.click()
        console.log('Forgot password clicked.');

        try {
            await driver.sleep(5000);
            // The timer here is to halt the process so that the container is loaded.
            const container = await driver.findElement(By.className('orangehrm-card-container'));
            const userNameInput = await container.findElement(By.name('username')); // there are no validation for the character type 
            userNameInput.sendKeys("Admin123");
            console.log('User Name filled.');

            // add Scenerio for when the field is empty


            // add scenerio for when user cancel's the method and the cancel button is clicked


            // Detecting button and clicking the button
            const confirmButton = container.findElement(By.className('orangehrm-forgot-password-button--reset'));
            confirmButton.click();
            console.log('Reset Password Button clicked.');
        } catch(error) {
            console.error('Error in detecting container:', error);
        }

        // checking the password title container for the link
        try {
            await driver.sleep(3000);
            const container = await driver.findElement(By.className('orangehrm-card-container'));
            const text = await container.findElement(By.className('orangehrm-forgot-password-title')).getText();
            // Checking if the text is same as the one planned.
            if(text === "Reset Password link sent successfully") {
                console.log(`${text}`);
            } else {
                console.log("There seems to be problem with text.");
            }
        } catch(error) {
            console.error('Error getting text from container.');
        }
        console.log('Check Your Email for the Reset Link.');
        console.log('Navigating to Log In Page.');
        await driver.navigate().back();
        await driver.navigate().back();
        await driver.sleep(3000);
    }catch(error) {
        console.error('Error during password Reset:', error)
    }

}
module.exports = passwordReset;