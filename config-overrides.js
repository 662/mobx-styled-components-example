const { injectBabelPlugin } = require("react-app-rewired");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin("styled-components", config);
  config = injectBabelPlugin(["transform-decorators-legacy", {}], config);

  return config;
};
