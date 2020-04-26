const inquirer = require('inquirer');
const inquirerFuzzyPath = require('inquirer-fuzzy-path');

const { handleError } = require('./handleError.js');

function runInteractiveGenerator({ argv, generator, mapper, questions }) {
  inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

  const settingsFromConfigFileAndParams = mapper(argv);
  const questionsWithDefaults = questions(settingsFromConfigFileAndParams);

  inquirer
    .prompt(questionsWithDefaults)
    .then((answers) =>
      generator({ ...settingsFromConfigFileAndParams, ...answers })
    )
    .catch(handleError);
}

module.exports = {
  runInteractiveGenerator,
};
