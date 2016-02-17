Package.describe({
  name: 'jss:meteor-form-data',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A module to create readable "multipart/form-data" streams (https://github.com/form-data/form-data) wrapped for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JSSolutions/meteor-form-data',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'form-data': '1.0.0-rc3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('form-data.js', 'server');
  api.export('FormData', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('form-data');
  api.addFiles('form-data-tests.js', 'server');
});
