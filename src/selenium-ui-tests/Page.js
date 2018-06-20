import { Builder, until } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';

let driver;

class Page {
  load = (url) => {
    driver = new Builder()
      .forBrowser('chrome')
      // .setChromeOptions(new chrome.Options().headless())
      .build();
    driver.get(url);
    return driver;
  }

  quit = () => {
    driver.quit();
  }

  findElement = async (by, timeout = 4000) => {
    await driver.wait(until.elementLocated(by), timeout);
    await driver.wait(until.elementIsVisible(driver.findElement(by)), timeout);
    return driver.findElement(by);
  }

  findElements = async (by, timeout = 4000) => {
    await driver.wait(() => driver.findElements(by).then((elements) => {
      if (elements.length > 0) {
        return true;
      }
      return false;
    }), timeout);
    return driver.findElements(by);
  }

  click = async (element, timeout = 4000) => {
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
    await element.click();
  }

  sleep = async (timeout = 400) => {
    await driver.sleep(timeout);
  }

  inputText = async (inputElement, text) => {
    await inputElement.sendKeys(text);
  }

  elementIsNotPresent = async (by, timeout = 4000) => {
    await driver.wait(() => driver.findElements(by).then((elements) => {
      if (elements.length <= 0) {
        return true;
      }
      return false;
    }), timeout);
  }
}

module.exports = Page;
