const questions = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Component name:',
    validate: (value) =>
      /^[a-zA-Z][0-9a-zA-Z]*([-_][0-9a-zA-Z]+)*$/.test(value.trim()) ||
      'Pass a valid component name',
  },
  {
    type: 'fuzzypath',
    name: 'location',
    excludePath: (nodePath) =>
      ['build', 'node_modules', '.git', '.idea'].some((excludedPath) =>
        nodePath.startsWith(excludedPath)
      ),
    itemType: 'directory',
    message: 'Target location:',
  },
  {
    type: 'confirm',
    name: 'index',
    message: 'With index file?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'lazyLoaded',
    message: 'Is lazy loaded?',
    default: false,
  },
  {
    type: 'list',
    name: 'styles',
    message: 'Style solution:',
    choices: [
      { name: 'None', value: false },
      { name: 'CSS', value: 'css' },
      { name: 'CSS Modules', value: 'css-modules' },
      { name: 'Material-UI', value: 'material-ui' },
    ],
  },
];

module.exports = {
  questions,
};
