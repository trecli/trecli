const { generator } = require('./generator');

const command = {
  command: 'config',
  describe: 'Generate config file',
  builder: () => {},
  handler: (argv) => {
    generator(argv);
  },
};

module.exports = {
  command,
};
