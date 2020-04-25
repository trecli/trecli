const questions = [
  {
    name: 'componentName',
    message: 'Component name:',
    type: 'input',
    validate: (value) =>
      /^[a-zA-Z][0-9a-zA-Z]*([-_][0-9a-zA-Z]+)*$/.test(value.trim()) ||
      'Pass a valid component name',
  },
  {
    name: 'location',
    message: 'Target location:',
    type: 'fuzzypath',
    itemType: 'directory',
    excludePath: (nodePath) =>
      ['build', 'node_modules', '.git', '.idea'].some((excludedPath) =>
        nodePath.startsWith(excludedPath)
      ),
  },
  {
    name: 'index',
    message: 'With index file?',
    type: 'confirm',
    default: false,
  },
  {
    name: 'lazyLoaded',
    message: 'Is lazy loaded?',
    type: 'confirm',
    default: false,
  },
  {
    name: 'styles',
    message: 'Style solution:',
    type: 'list',
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
