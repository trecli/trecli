const component = (data) => {
  const { componentName, index, lazyLoaded, styles } = data;

  const stylesImport =
    {
      css: `import './${componentName}.css';\n`,
      'css-modules': `import styles from './${componentName}.module.css';\n`,
      'material-ui': `import { useStyles } from './${componentName}.styles';\n`,
    }[styles] || '';

  const stylesUsage =
    {
      css: '',
      'css-modules': '',
      'material-ui': `  const classes = useStyles();\n\n`,
    }[styles] || '';

  const exportString = index || lazyLoaded ? 'export default ' : 'export ';

  return `import React from 'react';

import { ${componentName}Props } from './${componentName}.interface';
${stylesImport}\

${exportString}function ${componentName}(props: ${componentName}Props) {
${stylesUsage}\
  return <>${componentName} rendered</>;
}`;
};

module.exports = {
  component,
};
