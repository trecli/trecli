const fs = require('fs-extra');
const path = require('path');

const { showError, showNonQuietInfo, showVerboseInfo } = require('./logger');

function createFile({ data, fileLocation, fileName, templateFn }) {
  const fullPath = path.join(fileLocation, fileName);

  if (fs.existsSync(fullPath)) {
    showError(`File ${fullPath} already exists`);
    return;
  }

  const content = templateFn(data);

  if (!data.dryRun) {
    fs.writeFileSync(fullPath, content);
  }

  showNonQuietInfo(fullPath, data);
  showVerboseInfo(content, data);
}

module.exports = {
  createFile,
};
