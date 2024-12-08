const { By } = require('selenium-webdriver');

async function login(driver) {
    
    console.log('The Log in process has started.')
    await driver.sleep(5000);
    const logIn = await driver.findElement(By.className('orangehrm-login-form'));
    const loogInCreds = await logIn.findElement(By.className('orangehrm-login-error'));
    const logInForm = await logIn.findElement(By.className('oxd-form'));

    if (loogInCreds) {
        const userName = await loogInCreds.findElement(By.cl)
    } 
}


module.exports = login;