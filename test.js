require('dotenv').config();
const launchWebDriver = require('./utils/webBrowser');

(async () => {
    const browserName = process.env.BROWSER;
    const baseUrl = process.env.URL;

    const driver = await launchWebDriver(browserName);

    try {
        driver.manage().window().maximize();
        await driver.get(baseUrl);
        console.log(`The test is running.`);
    } finally {
        await driver.quit();
    }
})();
