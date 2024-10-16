const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    // Create a new WebDriver instance for Chrome
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // Navigate to a website
        await driver.get('http://www.google.com');
        
        // Find the search box by name and type "Selenium"
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
        
        // Wait for the search results to load
        await driver.wait(until.titleContains('Selenium'), 10000);
        
        console.log("Test passed");
    } catch (err) {
        console.log("Test failed", err);
    } finally {
        // Quit the browser
        await driver.quit();
    }
})();