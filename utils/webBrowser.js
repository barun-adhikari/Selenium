const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');

async function launchWebDriver(browserName) {
    let driver;

    switch (browserName) {
        case 'chrome':
            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(new chrome.Options())
                .build();
            break;

        case 'firefox':
            driver = await new Builder()
                .forBrowser('firefox')
                .setFirefoxOptions(new firefox.Options())
                .build();
            break;

        case 'edge':
            driver = await new Builder()
                .forBrowser('MicrosoftEdge')
                .setEdgeOptions(new edge.Options())
                .build();
            break;

        case 'safari':
            driver = await new Builder()
                .forBrowser('safari')
                .build();
            break;

        default:
            throw new Error('Browser not supported: ' + browserName);
    }

    return driver;
}

module.exports = launchWebDriver;
