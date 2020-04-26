function runGenerator({ argv, generator, mapper }) {
  const settingsFromConfigFileAndParams = mapper(argv);
  generator(settingsFromConfigFileAndParams);
}

module.exports = {
  runGenerator,
};
