/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'hebe-dash',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // dataMillUrl: 'http://api.leedsdatamill.org/',
      // statnoticeURL: 'http://statnotices.azurewebsites.net', // LIVE 
      // solomonAPIURL: 'http://localhost:8080',
      // solomonAPIURL: 'http://hebedashapi-preview.azurewebsites.net',
      // solomonAPIURL: 'http://hebedashapi.azurewebsites.net',
      
      dataMillCatAPI: 'http://leedsdatamill.org', // http://leedsdatamill.org/api (the catalogue API for package queries)
      dataMillDataAPI: 'http://api.datapress.io/api/3/',     // (the datastore API where data ends up in the 'push to datastore' case).
      statnoticeURL: 'http://statnotices-preview.azurewebsites.net', // PREVIEW 
      // hebeNodeAPI: 'http://hebenodeapi-testing.azurewebsites.net/',
      hebeNodeAPI: 'http://hebenodeapi-cached.azurewebsites.net/',
      // solomonAPIURL: 'http://testing.api.mysolomon.co.uk',
      solomonAPIURL: 'http://solomonapi-preview.azurewebsites.net'
    }
  };

  ENV['simple-auth'] = {
    // authorizer: 'simple-auth-authorizer:oauth2-bearer'
    // authorizer: 'simple-auth-authorizer:unique-token',
    authorizer: 'authorizer:unique',
    authenticator: 'authenticator:unique',
    store: 'simple-auth-session-store:local-storage'
  };

  // ENV['torii'] = {
  //   providers: {
  //     'facebook-oauth2': {
  //       apiKey: '631252926924840'
  //     },
  //     'unique': {

  //     }
  //   }
  // };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicyHeader = 'Disabled-Content-Security-Policy';
    // ENV.APP.statnoticeURL = 'http://localhost:8080'; // DEV
    // ENV.APP.statnoticeURL =  'http://statnotices-preview.azurewebsites.net'; // PREVIEW 
    // ENV.APP.solomonAPIURL = 'http://hebedashapi-dev.azurewebsites.net';
    // ENV.APP.solomonAPIURL = 'http://localhost:3000';
    // ENV.APP.hebeNodeAPI = 'http://localhost:3000';
    // ENV.APP.hebeNodeAPI = 'http://hebenodeapi-cached.azurewebsites.net';
    // ENV.APP.mockSolomonHostname = 'leeds.preview.mysolomon.co.uk'; // lets you simulate a particular site e.g. 'leeds.preview.mysolomon.co.uk' core etc
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  
  ENV.googleMap = {
    libraries: ['drawing', 'visualization']
  };

  return ENV;
};
