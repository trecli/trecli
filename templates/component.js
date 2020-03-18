const component = data => `import React from 'react';

import { ${data.componentName}Props } from './${data.componentName}.interfaces';
${getStylesImportTemplate(data)}\

const ${data.componentName}: React.FunctionComponent<${
  data.componentName
}Props> = ({}) => {
${getStylesUsageTemplate(data)}\
  return <>${data.componentName} rendered</>;
};

export default ${data.componentName};`;

const getStylesImportTemplate = data => {
  switch (data.styles) {
    case 'none':
      return '';
    case 'material-ui':
      return `import { useStyles } from './${data.componentName}.styles';\n`;
    default:
      return '';
  }
};

const getStylesUsageTemplate = data => {
  switch (data.styles) {
    case 'none':
      return '';
    case 'material-ui':
      return `  const classes = useStyles();\n\n`;
    default:
      return '';
  }
};

module.exports = {
  component
};
