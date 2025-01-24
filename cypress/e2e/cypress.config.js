const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume#',
    setupNodeEvents(on, config) {
      // Add any event listeners here, if needed
    },
  },
});

