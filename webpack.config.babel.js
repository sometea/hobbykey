import path from 'path'; // Join paths with the right type of slash

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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
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
};

export default config;
