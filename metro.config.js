// This replaces `const { getDefaultConfig } = require('expo/metro-config');`
const { getSentryExpoConfig } = require("@sentry/react-native/metro");
const { getDefaultConfig } = require("expo/metro-config");

// This replaces `const config = getDefaultConfig(__dirname);`
const config = getSentryExpoConfig(__dirname);

module.exports = config;

const defaultConfig = getDefaultConfig(__dirname);

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
