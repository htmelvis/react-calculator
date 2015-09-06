var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH);
module.exports = {
  context: ROOT_PATH,
  entry:  [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    ROOT_PATH + '/App.js'],
  output: {
    path: ROOT_PATH + '/public',
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:8080/'
  },
  module: {
    loaders: [
      //think of babel vs jsx-loader
      {test: /\.js?$/, exclude:/node_modules/,loaders: ['react-hot','babel-loader'], include: path.join(__dirname, 'public')},
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel']},
      {test: /\.scss?$/, loaders: ['style','css','sass']}
    ]
  },
  plugins: [
    //extract inline css into a main style.css fil
    //new ExtractTextPlugin('public/styles.css', {
    //  allChunks: true
    //}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true
  }
};
