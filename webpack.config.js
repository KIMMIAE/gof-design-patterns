const path = require('path');
module.exports = {
  mode: 'development',
  // entry: './src/index.ts',
  // entry: './src/behavioral/iterator/index.ts',
  // entry: './src/behavioral/strategy/index.ts',
  // entry: './src/behavioral/template/index.ts',
  // entry: './src/structural/adapter/index.ts',
  // entry: './src/structural/bridge/index.ts',
  // entry: './src/structural/decorator/index.ts',
  entry: './src/creational/singleton/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
