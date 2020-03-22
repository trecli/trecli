const mapper = argv => {
  const {
    ComponentName: componentName,
    dryRun,
    lazyLoaded,
    quiet,
    styles = 'none',
    verbose
  } = argv;

  return {
    componentName,
    dryRun,
    lazyLoaded,
    location: '.', // TODO remove hardcode
    quiet,
    styles,
    verbose
  };
};

module.exports = {
  mapper
};
