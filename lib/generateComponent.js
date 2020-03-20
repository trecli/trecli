const camelCase = require('camelcase');
const fs = require('fs-extra');
const path = require('path');

const { component } = require('../templates/component.js');
const { emptyFile } = require('../templates/emptyFile');
const { indexFile } = require('../templates/indexFile.js');
const { interfaces } = require('../templates/interfaces.js');
const { materialUiStyles } = require('../templates/materialUiStyles.js');
const { showError, showNonQuietInfo, showVerboseInfo } = require('./logger');

function generateComponent(answers) {
  const data = {
    ...answers,
    componentName: camelCase(answers.componentName, { pascalCase: true })
  };

  const componentDirectory = path.join(data.location, data.componentName);

  if (fs.existsSync(componentDirectory)) {
    showError('Component directory already exists');
  } else {
    if (!data.dryRun) {
      fs.mkdirSync(componentDirectory);
    }
    createFile('index.ts', indexFile);
    createFile(data.componentName + '.tsx', component);
    createFile(data.componentName + '.interface.ts', interfaces);
    if (data.styles === 'none') {
      return;
    }
    createFile(data.componentName + getStylesExtension(), getStylesTemplate());
  }

  function createFile(fileName, template) {
    const fileLocation = path.join(componentDirectory, fileName);
    const content = template(data);

    if (!data.dryRun) {
      fs.writeFileSync(fileLocation, content);
    }

    showNonQuietInfo(fileLocation, data);
    showVerboseInfo(content, data);
  }

  function getStylesExtension() {
    return {
      css: '.css',
      'css-modules': '.module.css',
      'material-ui': '.styles.ts'
    }[data.styles];
  }

  function getStylesTemplate() {
    return {
      css: emptyFile,
      'css-modules': emptyFile,
      'material-ui': materialUiStyles
    }[data.styles];
  }
}

module.exports = {
  generateComponent
};
