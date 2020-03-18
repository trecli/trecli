#!/usr/bin/env node

import inquirer from 'inquirer';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';

import { handleError } from './lib/handleError.js';
import { generate } from './lib/generate.js';
import { questions } from './lib/questions.js';

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

inquirer
  .prompt(questions)
  .then(generate)
  .catch(handleError);
