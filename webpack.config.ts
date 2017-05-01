import * as path from 'path'; // Join paths with the right type of slash
import * as webpack from 'webpack';

require('es6-promise').polyfill();

const config = {
entry: {
		bundle: path.join(__dirname, 'client', 'main.ts'),
    polyfills: path.join(__dirname, 'client', 'polyfills.ts'),
		tests: path.join(__dirname, 'client', 'tests.ts'),
  },
  output: {
    path: path.join(__dirname, 'public/js/generated'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: ['file-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
  ]
};

export default config;
