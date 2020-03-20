#!/usr/bin/env node

const {
  getGeneratorConfigFromArgv
} = require('./lib/getGeneratorConfigFromArgv.js');
const { runInteractiveGenerator } = require('./lib/runInteractiveGenerator.js');
const { generateComponent } = require('./lib/generateComponent.js');

require('yargs')
  .command(
    'init',
    'Generate settings file',
    () => {},
    argv => {
      console.log('init', argv);
    }
  )
  .command(
    ['component [ComponentName]', 'c [ComponentName]', '$0 [ComponentName]'],
    'Create component directory and files',
    yargs => {
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
    argv => {
      if (argv.interactive) {
        runInteractiveGenerator();
        return;
      }
      const generatorConfig = getGeneratorConfigFromArgv(argv);
      generateComponent(generatorConfig);
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse();
