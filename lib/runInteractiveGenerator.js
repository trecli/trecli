const inquirer = require('inquirer');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');

const { handleError } = require('./handleError.js');
const { generateComponent } = require('./generateComponent.js');
const { questions } = require('./questions.js');

function runInteractiveGenerator() {
  inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

  inquirer
    .prompt(questions)
    .then(generateComponent)
    .catch(handleError);
}

module.exports = {
  runInteractiveGenerator
};
