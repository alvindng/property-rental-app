/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    firebase: {
<<<<<<< HEAD
      apiKey: "AIzaSyCAW14W5ylxUwAAdLc8Bs5AJC-bgDntJkw",
      authDomain: "super-rentals-2de12.firebaseapp.com",
      databaseURL: "https://super-rentals-2de12.firebaseio.com",
      storageBucket: "super-rentals-2de12.appspot.com",
=======
      apiKey: "AIzaSyCRP8VI3P43r2mvL75Warw2WnMmMjNwQsA",
      authDomain: "property-rental-app.firebaseapp.com",
      databaseURL: "https://property-rental-app.firebaseio.com",
      storageBucket: "property-rental-app.appspot.com",
>>>>>>> d61f774a3f502595c54a8fcebeaeefd3d774840c
    },
    modulePrefix: 'property-rental-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  return ENV;
};
