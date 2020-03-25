const fs = require('fs-extra');
const path = require('path');

const { showNonQuietInfo, showVerboseInfo } = require('../../lib/logger');
const { configFile } = require('./templates/configFile');

const { name: packageName } = require('../../package.json');

const generator = (answers) => {
  const data = {
    ...answers,
  };

  createFile(`.${packageName}rc.js`, configFile);

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
