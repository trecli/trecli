const camelCase = require('camelcase');
const fs = require('fs-extra');
const path = require('path');

const { createFile } = require('../../lib/createFile');
const { showError } = require('../../lib/logger');
const { component } = require('./templates/component');
const { emptyFile } = require('./templates/emptyFile');
const { indexFile } = require('./templates/indexFile');
const { interfaces } = require('./templates/interfaces');
const { materialUiStyles } = require('./templates/materialUiStyles');

function generator(answers) {
  const data = {
    ...answers,
    componentName: camelCase(answers.componentName, { pascalCase: true }),
  };

  const componentDirectory = path.join(data.location, data.componentName);

  if (fs.existsSync(componentDirectory)) {
    showError('Component directory already exists');
  } else {
    if (!data.dryRun) {
      fs.mkdirSync(componentDirectory);
    }
    if (data.index) {
      saveFile('index.ts', indexFile);
    }
    saveFile(data.componentName + '.tsx', component);
    saveFile(data.componentName + '.interface.ts', interfaces);
    if (data.styles) {
      saveFile(data.componentName + getStylesExtension(), getStylesTemplate());
    }
  }

  function saveFile(fileName, templateFn) {
    createFile({
      data,
      fileLocation: componentDirectory,
      fileName,
      templateFn,
    });
  }

  function getStylesExtension() {
    return {
      css: '.css',
      'css-modules': '.module.css',
      'material-ui': '.styles.ts',
    }[data.styles];
  }

  function getStylesTemplate() {
    return {
      css: emptyFile,
      'css-modules': emptyFile,
      'material-ui': materialUiStyles,
    }[data.styles];
  }
}

module.exports = {
  generator,
};
