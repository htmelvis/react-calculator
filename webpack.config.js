module.exports = {
  context: __dirname,
  entry: './App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },
  devServer: {
    contentBase: "./public",
    noInfo: true, //  --no-info option
    hot: true,
    inline: true
  }
};