const mapper = ({
  ComponentName: componentName,
  dryRun = false,
  index = false,
  lazyLoaded = false,
  location = '.', // TODO remove hardcode
  quiet = false,
  styles = false,
  verbose = false,
}) => ({
  componentName,
  dryRun,
  index,
  lazyLoaded,
  location,
  quiet,
  styles,
  verbose,
});

module.exports = {
  mapper,
};
