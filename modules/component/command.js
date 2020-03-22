const {
  runInteractiveGenerator
} = require('../../lib/runInteractiveGenerator.js');
const { generator } = require('./generator');
const { mapper } = require('./mapper');
const { questions } = require('./questions');

const command = {
  command: [
    'component [ComponentName]',
    'c [ComponentName]',
    '$0 [ComponentName]'
  ],
  // TODO read and improve if possible: https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
  describe: 'Create component directory and files',
  builder: yargs => {
    yargs.positional('ComponentName', {
      type: 'string',
      describe:
        'Component name that will be applied to component directory and component files (excluding index.ts)'
    });
    yargs.option('styles', {
      alias: 's',
      describe: 'Select style solution',
      choices: ['css', 'css-modules', 'material-ui']
    });
    yargs.option('lazy-loaded', {
      type: 'boolean',
      alias: 'l',
      describe: "Create index.ts with 'default' exported"
    });
    yargs.option('interactive', {
      type: 'boolean',
      alias: 'i',
      describe: 'Run interactive mode'
    });
    yargs.option('dry-run', {
      type: 'boolean',
      alias: 'd',
      describe: 'Don’t write anything, show what would be done'
    });
    yargs.option('quiet', {
      type: 'boolean',
      alias: 'q',
      describe: 'Be quiet, only report errors',
      conflicts: ['dry-run', 'verbose']
    });
    yargs.check(argv => {
      if (!argv.ComponentName && !argv.interactive) {
        throw 'Not enough non-option arguments: got 0, need at least 1';
      } else {
        return true;
      }
    });
  },
  handler: argv => {
    if (argv.interactive) {
      runInteractiveGenerator(questions, generator); // TODO pass flags as question defaults
      return;
    }
    const generatorConfig = mapper(argv);
    generator(generatorConfig);
  }
};

module.exports = {
  command
};
