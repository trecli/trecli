const handleError = error => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else when wrong
  }
};

module.exports = {
  handleError
};
