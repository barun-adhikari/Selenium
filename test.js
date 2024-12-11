require('dotenv').config();

const logIn = require('./pages/Authentication/login');
const passwordReset = require('./pages/Authentication/forgotPassword')

const launchWebDriver = require('./utils/webBrowser');


(async () => {
    const browserName = process.env.BROWSER;
    const baseUrl = process.env.URL;

    console.log(`The test has started.`);
    const driver = await launchWebDriver(browserName);

    try {
        console.log(`The browser ${browserName} has been opened for testing purpose.`);
        driver.manage().window().maximize();
        console.log("The browser is maximized for the test.");
        await driver.get(baseUrl);
        console.log(`The ${baseUrl} is set and the page is loading.`);
        await driver.sleep(5000);
        // checking the flow for password Reset 
        await passwordReset(driver);

        // The Log in Process start's here.
        console.log('The Log in process has started.');
        // await logIn(driver);

    }catch(err) {
        console.error('An error occurred during the test:', err);        
    } finally {
            if (driver) {
            console.log('Closing the browser.');
            // await driver.quit();
            }
        }
})();
