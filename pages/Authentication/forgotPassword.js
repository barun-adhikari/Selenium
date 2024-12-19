const { By } = require('selenium-webdriver');
const randomNumber = require('../../utils/generateRandomNumber');

class ResetPassword {
    constructor(driver) {
        this.driver = driver;    
    }

    async clickForgotPassword() {
        try {
            const forgotText = await this.driver.findElement(By.className('orangehrm-login-forgot'));
            const actions = await forgotText.findElement(By.className('orangehrm-login-forgot-header'));
            await actions.click();
            console.log('Forgot password clicked.');
        }catch(error){
            console.error("Problem in clickForgotPassword Function with in the class:", error);
        }
    }
}

async function PasswordReset(driver) {
    try {
        const resetPasswordInstance = new ResetPassword(driver);
        await resetPasswordInstance.clickForgotPassword();
    } catch(error) {
        console.error("Error in Password Reset function:", error);
    }
}

module.exports = PasswordReset;