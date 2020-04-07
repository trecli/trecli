const component = (data) => {
  const { componentName, styles } = data;

  const stylesImport = {
    none: '',
    css: `import './${componentName}.css';\n`,
    'css-modules': `import styles from './${componentName}.module.css';\n`,
    'material-ui': `import { useStyles } from './${componentName}.styles';\n`,
  }[styles];

  const stylesUsage = {
    none: '',
    css: '',
    'css-modules': '',
    'material-ui': `  const classes = useStyles();\n\n`,
  }[styles];

  return `import React from 'react';

import { ${componentName}Props } from './${componentName}.interface';
${stylesImport}\

function ${componentName}({  }: ${componentName}Props) {
${stylesUsage}\
  return <>${componentName} rendered</>;
}

export default ${componentName};`;
};

module.exports = {
  component,
};
