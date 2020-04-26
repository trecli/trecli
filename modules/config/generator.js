const fs = require('fs-extra');
const path = require('path');

const {
  showError,
  showNonQuietInfo,
  showVerboseInfo,
} = require('../../lib/logger');
const { configFile } = require('./templates/configFile');

const { name: packageName } = require('../../package.json');

const generator = (answers) => {
  const data = {
    ...answers,
  };

  const configFileName = `.${packageName}rc.js`;
  const fileLocation = path.join('.', configFileName);

  if (fs.existsSync(fileLocation)) {
    showError('Config file already exists');
    return;
  }

  createFile(configFileName, configFile);

  function createFile(fileName, template) {
    const fileLocation = path.join('.', fileName);
    const content = template(data);

    if (!data.dryRun) {
      fs.writeFileSync(fileLocation, content);
    }

    showNonQuietInfo(fileLocation, data);
    showVerboseInfo(content, data);
  }
};

module.exports = {
  generator,
};
