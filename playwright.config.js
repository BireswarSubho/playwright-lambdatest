const { defineConfig } = require('@playwright/test');
const capabilities = require('./config/capabilities');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: "https://www.lambdatest.com",
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  projects: capabilities.map(capability => ({
    name: capability['LT:Options']['name'],
    use: {
      browserName: capability.browserName,
      ...capability['LT:Options'],
    },
  })),
  workers: 3
});
