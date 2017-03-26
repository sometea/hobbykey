import path from 'path'; // Join paths with the right type of slash

require('es6-promise').polyfill();

const config = {
entry: {
		bundle: path.join(__dirname, 'client', 'main.ts'),
    polyfills: path.join(__dirname, 'client', 'polyfills.ts'),
		//tests: path.join(__dirname, 'client', 'tests.js'),
  },
  output: {
    path: path.join(__dirname, 'public/js/generated'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Transpile all .js files from ES6 to ES5
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/, // Use the style-loader for all .css files
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // Use the file-loader for fonts
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
