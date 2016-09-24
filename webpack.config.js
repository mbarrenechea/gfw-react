var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpg']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {test: /\.jsx?/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'},
      {test: /\.(eot|ttf|woff2|woff)$/, loader: 'url-loader?prefix=fonts/&context=./src/fonts'}
    ]
  },
  sassLoader: {
    includePaths: ['src/styles']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
