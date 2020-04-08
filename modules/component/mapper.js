const mapper = (argv) => {
  const {
    ComponentName: componentName,
    dryRun,
    lazyLoaded,
    quiet,
    styles = false,
    verbose,
  } = argv;

  return {
    componentName,
    dryRun,
    lazyLoaded,
    location: '.', // TODO remove hardcode
    quiet,
    styles,
    verbose,
  };
};

module.exports = {
  mapper,
};
