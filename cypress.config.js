
const { defineConfig } = require('cypress');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', browserify.default(config));

  return config;

}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://dummyticket.com',
        defaultCommandTimeout: 80000,
        pageLoadTimeout: 600000,
        viewportHeight: 938,
        viewportWidth: 1520,
        specPattern: '**/*.feature',
        setupNodeEvents,
        // retries: {
        //   openMode: 1,
        //   runMode: 1
        // }
      
    },
});
    