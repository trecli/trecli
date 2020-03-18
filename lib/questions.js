export const questions = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Component name:',
    validate: value => true || 'Pass a valid component name' // TODO add validation
  },
  {
    type: 'fuzzypath',
    name: 'location',
    excludePath: nodePath =>
      ['build', 'node_modules', '.git', '.idea'].some(excludedPath =>
        nodePath.startsWith(excludedPath)
      ),
    itemType: 'directory',
    message: 'Target location:'
  },
  {
    type: 'confirm',
    name: 'isLazyLoaded',
    message: 'Is lazy loaded?',
    default: false
  },
  {
    type: 'list',
    name: 'styles',
    message: 'Style solution:',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Material-UI', value: 'material-ui' }
      // TODO add more styling solutions
      // { name: 'CSS', value: 'css' },
      // { name: 'CSS Modules', value: 'css-modules' }
    ]
  }
];
