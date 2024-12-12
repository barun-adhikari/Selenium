# Selenium JavaScript Automation Project (Under Construction...)

This project demonstrates the use of Selenium WebDriver with JavaScript to automate browser-based tasks and testing for web applications.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Browser Support](#browser-support)
- [Common Issues](#common-issues)

## Prerequisites

Before running this project, ensure you have the following installed:
- **Node.js** (version 20.11.0 or higher recommended)
- **npm** (comes with Node.js)
- **ChromeDriver** or **geckodriver** (for Firefox)
- **Selenium WebDriver** installed through npm

## Installation

Clone the repository:

   ```bash
   git clone git@github.com:barun-adhikari/Selenium.git
   cd selenium-js-automation
   ```
## Install dependencies:

   ```bash
   npm install
   ```
Ensure you have the necessary browser driver (e.g., ChromeDriver or geckodriver) in your PATH or downloaded locally.

## Project Structure

```
selenium-js-automation/
│
├── tests/
│   ├── exampleTest.js         # Example test script
│   └── anotherTest.js         # Another sample test script
├── utils/
│   └── helper.js              # Utility functions for tests
├── package.json
├── .env
├── test.js                    # The E2E test script    
└── README.md                  # Project documentation
```
- tests/: Contains test scripts written in JavaScript using Selenium WebDriver.
- utils/: Contains utility/helper functions that are reusable across test scripts.

## Running Tests

You can run the test scripts using the following command:
   ```
   node tests/exampleTest.js
   ```

You can run the E2E test from here
   ```
   node test.js
   ```

## Browser Support
This project supports multiple browsers. Ensure the correct driver is available and configured:
- Google Chrome (via ChromeDriver)
- Mozilla Firefox (via geckodriver)
- Microsoft Edge (via EdgeDriver) 

## Common Issues
- WebDriver not found: Ensure the correct browser driver (e.g., ChromeDriver or geckodriver) is installed and available in your system's PATH.
- Timeouts or slow tests: Increase the wait time in your test scripts if your browser or application is taking longer to load elements.
