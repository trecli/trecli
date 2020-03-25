const chalk = require('chalk');

const getError = (msg) => chalk.red(msg);

const showError = (msg) => console.log(getError(msg));

const showNonQuietInfo = (msg, data) => {
  if (!data.quiet) {
    console.log(msg);
  }
};

const showVerboseInfo = (msg, data) => {
  if (data.verbose) {
    console.log(chalk.cyan(msg));
  }
};

module.exports = {
  getError,
  showError,
  showNonQuietInfo,
  showVerboseInfo,
};
