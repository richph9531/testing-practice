module.exports = {
  videoUploadOnPasses: false,
  retries: 1,
  e2e: {
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config);
    // },
    baseUrl: 'http://localhost:3000',
  },
};