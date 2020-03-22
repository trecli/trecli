const chalk = require('chalk');

const showError = (msg) => console.log(chalk.red(msg));

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
  showError,
  showNonQuietInfo,
  showVerboseInfo,
};
