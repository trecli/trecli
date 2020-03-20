const component = data => `import React from 'react';

import { ${data.componentName}Props } from './${data.componentName}.interface';
${getStylesImportTemplate(data)}\

const ${data.componentName}: React.FunctionComponent<${
  data.componentName
}Props> = ({}) => {
${getStylesUsageTemplate(data)}\
  return <>${data.componentName} rendered</>;
};

export default ${data.componentName};`;

const getStylesImportTemplate = data =>
  ({
    none: '',
    css: `import './${data.componentName}.css';\n`,
    'css-modules': `import styles from './${data.componentName}.module.css';\n`,
    'material-ui': `import { useStyles } from './${data.componentName}.styles';\n`
  }[data.styles]);

const getStylesUsageTemplate = data =>
  ({
    none: '',
    css: '',
    'css-modules': '',
    'material-ui': `  const classes = useStyles();\n\n`
  }[data.styles]);

module.exports = {
  component
};
