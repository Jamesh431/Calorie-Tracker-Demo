// Import necessary functions
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

// Use Sentry configuration
module.exports = getSentryExpoConfig(__dirname);

// If you need to add custom resolver settings, do so after importing Sentry config
const defaultConfig = require("expo/metro-config").getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  "@components": `${__dirname}/src/components`,
  "@requests": `${__dirname}/src/requests`,
  "@static": `${__dirname}/src/static`,
  "@store": `${__dirname}/src/store`,
  "@utils": `${__dirname}/src/utils`,
  "@typeDefs": `${__dirname}/src/types`,
  "@compStyles": `${__dirname}/src/styles/components`,
};

module.exports = defaultConfig;
