const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.vr.com.br/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,  // Timeout padrão para comandos
    requestTimeout: 10000,          // Timeout para solicitações de rede
    responseTimeout: 30000,        // Timeout para respostas de rede
    pageLoadTimeout: 60000,        // Timeout para carregamento de página
    screenshotOnRunFailure: true,
    video: true,
    videosFolder: 'reports/videos',
    screenshotsFolder: 'reports/screenshots',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // Desabilitar cache
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-application-cache');
          return launchOptions;
        }
      });
    }
  }
});
