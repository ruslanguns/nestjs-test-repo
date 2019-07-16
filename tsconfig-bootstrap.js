const config = require('./tsconfig.json');
const tsconfigPaths = require('tsconfig-paths');

const baseUrl = './dist';
tsconfigPaths.register({
  baseUrl,
  paths: config.compilerOptions.paths
});