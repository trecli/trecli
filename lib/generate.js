const camelCase = require('camelcase');
const fs = require('fs-extra');
const path = require('path');

const { component } = require('../templates/component.js');
const { indexFile } = require('../templates/indexFile.js');
const { interfaces } = require('../templates/interfaces.js');
const { styles } = require('../templates/styles.js');

function generate(answers) {
  const data = {
    ...answers,
    componentName: camelCase(answers.componentName, { pascalCase: true })
  };

  const componentDirectory = path.join(data.location, data.componentName);

  if (fs.existsSync(componentDirectory)) {
    console.log('Component directory already exists');
  } else {
    fs.mkdirSync(componentDirectory);
    createFile('index.ts', indexFile);
    createFile(data.componentName + '.tsx', component);
    createFile(data.componentName + '.interfaces.ts', interfaces);
    if (data.styles === 'none') {
      return;
    }
    createFile(data.componentName + '.styles.ts', styles);
  }

  function createFile(fileName, templateFunction) {
    const fileLocation = path.join(componentDirectory, fileName);
    const content = templateFunction(data);
    console.log(fileLocation);

    fs.writeFileSync(fileLocation, content);
  }
}

module.exports = {
  generate
};
