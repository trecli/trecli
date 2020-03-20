const indexFile = data => {
  const { componentName, isLazyLoaded } = data;

  return isLazyLoaded
    ? `export { default } from './${componentName}';`
    : `export { default as ${componentName} } from './${componentName}';`;
};

module.exports = {
  indexFile
};
