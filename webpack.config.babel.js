import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    { from: './README.md' },
    { from: './package.json' },
    { from: './tools', to: 'tools' },
  ]),
];

export default {
  devtool: 'hidden-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'grommet.min.js',
    libraryTarget: 'var',
    library: 'Grommet',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
