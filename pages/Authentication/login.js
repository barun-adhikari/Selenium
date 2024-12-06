const { By } = require('selenium-webdriver');

async function login(driver) {
    
    console.log('The Log in process has started.')
    const logIn = await driver.findElement(By.className('orangehrm-login-form'));
    const loogInCreds = logIn[0];
    const logInForm = logIn[1];

    console.log(loogInCreds, logInForm);

}


module.exports = login;