const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './example/src/example.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example/build')
  },
  devServer: {
    contentBase: "./example/build"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./example/src/index.html",
      filename: "./index.html"
    })
  ]
};
