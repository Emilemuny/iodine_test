const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  retries: { "runMode": 0, "openMode": 0 },
  defaultCommandTimeout: 20000,
  env: {
  },
  e2e: {
    baseUrl: "http://iodinesoftware.com",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1070,
    viewportWidth: 1600,
    watchForFileChanges: true,
    chromeWebSecurity: false
  },
});