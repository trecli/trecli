const { createFile } = require('../../lib/createFile');
const { configFile } = require('./templates/configFile');
const { name: packageName } = require('../../package.json');

function generator(data) {
  createFile({
    data,
    fileLocation: '.',
    fileName: `.${packageName}rc.js`,
    templateFn: configFile,
  });
}

module.exports = {
  generator,
};
