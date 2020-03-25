const sharedOptions = {
  'dry-run': {
    alias: 'd',
    type: 'boolean',
    describe: 'Don’t write anything, show what would be done',
  },
  verbose: {
    alias: 'v',
    type: 'boolean',
    describe: 'Run with verbose logging',
  },
  quiet: {
    alias: 'q',
    type: 'boolean',
    describe: 'Be quiet, only report errors',
    conflicts: ['dry-run', 'verbose'],
  },
};

module.exports = {
  sharedOptions,
};
