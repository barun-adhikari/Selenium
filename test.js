require('dotenv').config();
const launchWebDriver = require('./utils/webBrowser');

(async () => {
    const browserName = process.env.BROWSER;
    const baseUrl = process.env.URL;

    console.log(`The test has started.`);
    const driver = await launchWebDriver(browserName);

    try {
        console.log(`The browser ${browserName} has been opened for testing purpose.`);
        driver.manage().window().maximize();
        console.log("The browser is maximized for the test.")
        await driver.get(baseUrl);
        console.log(`The Url is set and the page is loading.`);

        
    } finally {
        await driver.quit();
    }
})();
