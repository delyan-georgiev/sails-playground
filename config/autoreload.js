module.exports.autoreload = {
  active: true,
  usePolling: false,
  overrideMigrateSetting: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "api/policies"
  ],
  ignored: []
};
