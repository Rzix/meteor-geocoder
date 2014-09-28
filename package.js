Package.describe({
  name: "aldeed:geocoder",
  summary: "Easy geocoding by way of the node-geocoder package",
  version: "0.3.2",
  git: "https://github.com/aldeed/meteor-geocoder.git"
});

Npm.depends({
  'node-geocoder': '2.9.0'
});

Package.on_use(function(api) {
  api.export('GeoCoder', 'server');
  api.add_files('geocoder.js', 'server');
});
