# react-selenium-ui-test-example
Example project showing how Selenium webdriver can be used with mocha to run UI level tests in a local environment. It is using a local node.js server (expressJS) to mock api calls made by the application (see [mock-api-server/](https://github.com/RowanCarmichael/react-selenium-ui-test-example/tree/master/mock-api-server))

## Running locally 
1. pull master branch from https://github.com/RowanCarmichael/react-selenium-ui-test-example

2. in project folder run `yarn install:all` to install all project dependencies (for both the application as well as the mock api server)

3. `yarn run start:all` starts a localhost server for development purposes at localhost:3000 as well as the mock api server at localhost:8080

## Running tests
1. make sure you have [Google Chrome](https://www.google.com/chrome/) installed and [chrome driver](http://chromedriver.chromium.org/downloads) downloaded and set on your PATH environment variable

2. make sure the application is running locally at localhost:3000 (see 'Running locally' above)

3. `yarn run test:ui` runs all Selenium UI tests

## UI test implementation
The Selenium UI tests have been created using the page object model. First is the generic [page class](https://github.com/RowanCarmichael/react-selenium-ui-test-example/blob/master/src/selenium-ui-tests/Page.js) which handles the basic functionalities most commonly used to interact with the UI such as loading a page, finding en element on the page and clicking an element on the page. The actual [UI tests](https://github.com/RowanCarmichael/react-selenium-ui-test-example/blob/master/src/selenium-ui-tests/UI.test.js) should be constructed by calling human-readable composite functions defined in the specific [app page class](https://github.com/RowanCarmichael/react-selenium-ui-test-example/blob/master/src/selenium-ui-tests/AppPage.js). The app page class extends the page class, it has all the element locators and has functions that are specific only to the app. For example a function to wait for the map to finish loading and a function asserting on the marker count. By utilising the page object model the tests should be more durable, programmer friendly, and comprehensive. It should maximise code reuse and once the page classes are created, adding new tests should be quick and easy to implement.
The big difference between having UI level tests like this and having full end-to-end tests is that we are mocking out all api calls. For these tests we are assuming the api's will behave perfectly. We are now only concerned with testing the UI interactions in a real browser. It should be noted that UI tests like these should not be replacing full end-to-end tests, but instead should be used to cover UI cases which can be tested independantly of any api's. It allows us to move test cases from bulky end-to-end tests down the testing pyramid to the UI test level. Seeing as we have complete control over the mock api server we can reduce the call time to be almost instantaneous (See the delay in the [mock database](https://github.com/RowanCarmichael/react-selenium-ui-test-example/blob/master/mock-api-server/controllers/database.js)). By doing so we can significatly speed up the time of a single test running.
