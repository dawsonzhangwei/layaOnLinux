const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const workSpaceDir = path.resolve(__dirname, '..');

module.exports = {
  entry: path.join(workSpaceDir, 'src/main.ts'),
  output: {
    path: path.join(workSpaceDir, 'bin/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [
      new TsconfigPathsPlugin({configFile: path.join(workSpaceDir, 'tsconfig.json')})
    ]
  },
  devtool: "source-map",
  mode: "development",
};