const indexFile = data =>
  data.isLazyLoaded
    ? `export { default } from './${data.componentName}';`
    : `export { default as ${data.componentName} } from './${data.componentName}';`;

module.exports = {
  indexFile
};
