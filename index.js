#!/usr/bin/env node

const yargs = require('yargs');

const { command: componentCommand } = require('./modules/component/command');
const { command: initCommand } = require('./modules/init/command');

yargs
  .command(initCommand)
  .command(componentCommand)
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
