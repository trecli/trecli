#!/usr/bin/env node

const yargs = require('yargs');

const { getConfigFromFile } = require('./lib/getConfigFromFile');
const { sharedOptions } = require('./lib/sharedOptions');
const { command: componentCommand } = require('./modules/component/command');
const { command: configCommand } = require('./modules/config/command');

yargs
  .showHelpOnFail(false)
  .config(getConfigFromFile())
  .command(componentCommand)
  .command(configCommand)
  .options(sharedOptions)
  .parse();
