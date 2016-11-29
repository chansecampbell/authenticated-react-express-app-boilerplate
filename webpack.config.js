module.exports = {
  context: __dirname + "/src",

  entry: [
    "./js/app.js",
  ], 
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
   resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!scss"
      },  
    ]
  }
};