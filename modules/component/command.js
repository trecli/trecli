const { getError } = require('../../lib/logger');
const { generator } = require('./generator');
const { mapper } = require('./mapper');
const { questions } = require('./questions');
const { runGenerator } = require('../../lib/runGenerator');
const {
  runInteractiveGenerator,
} = require('../../lib/runInteractiveGenerator');

const command = {
  command: [
    'component [ComponentName]',
    'c [ComponentName]',
    '$0 [ComponentName]',
  ],
  describe: 'Create component directory and files',
  builder: (yargs) => {
    yargs.positional('ComponentName', {
      type: 'string',
      describe:
        'Component name that will be applied to component directory and component files',
    });
    yargs.option('styles', {
      alias: 's',
      describe: 'Select styles solution',
      choices: ['css', 'css-modules', 'material-ui', false],
    });
    yargs.option('index', {
      type: 'boolean',
      alias: 'idx',
      describe: 'Create index file',
    });
    yargs.option('lazy-loaded', {
      type: 'boolean',
      alias: 'l',
      describe: "Create component with 'default' exported",
    });
    yargs.option('interactive', {
      type: 'boolean',
      alias: 'i',
      describe: 'Run interactive mode',
    });
    yargs.check((argv) => {
      if (!argv.ComponentName && !argv.interactive) {
        throw getError(
          `Specify component name or run '${argv.$0} --help' for more information`
        );
      } else {
        return true;
      }
    });
  },
  handler: (argv) => {
    if (argv.interactive) {
      runInteractiveGenerator({ generator, argv, mapper, questions });
    } else {
      runGenerator({ generator, argv, mapper });
    }
  },
};

module.exports = {
  command,
};
