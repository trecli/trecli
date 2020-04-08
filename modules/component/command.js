const {
  runInteractiveGenerator,
} = require('../../lib/runInteractiveGenerator');
const { getError } = require('../../lib/logger');
const { generator } = require('./generator');
const { mapper } = require('./mapper');
const { questions } = require('./questions');

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
        'Component name that will be applied to component directory and component files (excluding index.ts)',
    });
    yargs.option('styles', {
      alias: 's',
      describe: 'Select style solution',
      choices: ['css', 'css-modules', 'material-ui', false],
    });
    yargs.option('lazy-loaded', {
      type: 'boolean',
      alias: 'l',
      describe: "Create index.ts with 'default' exported",
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
      runInteractiveGenerator(questions, generator); // TODO pass flags as question defaults
      return;
    }
    const generatorConfig = mapper(argv);
    generator(generatorConfig);
  },
};

module.exports = {
  command,
};
