const indexFile = (data) => {
  const { componentName, lazyLoaded } = data;

  return lazyLoaded
    ? `export { default } from './${componentName}';`
    : `export { default as ${componentName} } from './${componentName}';`;
};

module.exports = {
  indexFile,
};
