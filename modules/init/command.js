const command = {
  command: 'init',
  describe: 'Generate settings file',
  builder: () => {},
  handler: (argv) => {
    console.log('init', argv);
  },
};

module.exports = {
  command,
};
