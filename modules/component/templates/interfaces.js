const interfaces = (data) => `interface ${data.componentName}OwnProps {

}

export type ${data.componentName}Props = ${data.componentName}OwnProps;
`;

module.exports = {
  interfaces,
};
