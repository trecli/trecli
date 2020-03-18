import camelCase from 'camelcase';
import fs from 'fs-extra';
import path from 'path';

import { component } from '../templates/component.js';
import { indexFile } from '../templates/indexFile.js';
import { interfaces } from '../templates/interfaces.js';
import { styles } from '../templates/styles.js';

export function generate(answers) {
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
    createFile(data.componentName + '.styles.ts', styles);
  }

  function createFile(fileName, templateFunction) {
    const fileLocation = path.join(componentDirectory, fileName);
    const content = templateFunction(data);
    console.log(fileLocation);

    fs.writeFileSync(fileLocation, content);
  }
}
