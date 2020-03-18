#!/usr/bin/env node

const inquirer = require('inquirer');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');

const { handleError } = require('./lib/handleError.js');
const { generate } = require('./lib/generate.js');
const { questions } = require('./lib/questions.js');

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

inquirer
  .prompt(questions)
  .then(generate)
  .catch(handleError);
