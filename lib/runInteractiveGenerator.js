const inquirer = require('inquirer');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');

const { handleError } = require('./handleError.js');

function runInteractiveGenerator(questions, generator) {
  inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

  inquirer
    .prompt(questions)
    .then(generator)
    .catch(handleError);
}

module.exports = {
  runInteractiveGenerator
};
