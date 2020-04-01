#!/usr/bin/env node

const yargs = require('yargs');

const { getConfigFromFile } = require('./lib/getConfigFromFile');
const { sharedOptions } = require('./lib/sharedOptions');
const { command: componentCommand } = require('./modules/component/command');
const { command: configCommand } = require('./modules/config/command');
const { name: packageName } = require('./package.json');

yargs
  .scriptName(packageName)
  .showHelpOnFail(false)
  .usage('$0 <port>', 'start the application server', (yargs) => {
    yargs.positional('port', {
      describe: 'the port that your application should bind to',
      type: 'number',
    });
  })
  .config(getConfigFromFile())
  .command(configCommand)
  .command(componentCommand)
  .options(sharedOptions)
  .alias('help', 'h')
  .alias('version', 'v')
  .wrap(Math.min(100, yargs.terminalWidth()))
  .parse();
