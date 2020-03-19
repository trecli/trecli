const inquirer = require('inquirer');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');

const { handleError } = require('./handleError.js');
const { generate } = require('./generate.js');
const { questions } = require('./questions.js');

function runInteractiveGenerator() {
  inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

  inquirer
    .prompt(questions)
    .then(generate)
    .catch(handleError);
}

module.exports = {
  runInteractiveGenerator
};
