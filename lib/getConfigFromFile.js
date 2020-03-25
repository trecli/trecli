const { cosmiconfigSync } = require('cosmiconfig');

const { name: packageName } = require('../package.json');

const getConfigFromFile = () => {
  try {
    const explorerSync = cosmiconfigSync(packageName);
    const searchedFor = explorerSync.search();

    return searchedFor.config;
  } catch (e) {
    return {};
  }
};

module.exports = {
  getConfigFromFile,
};
