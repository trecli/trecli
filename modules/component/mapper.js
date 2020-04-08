const mapper = ({
  ComponentName: componentName,
  dryRun,
  index,
  lazyLoaded,
  location = '.', // TODO remove hardcode
  quiet,
  styles,
  verbose,
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
