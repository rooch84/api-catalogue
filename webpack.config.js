const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    name: "example",
    entry: './example/src/example.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'example/build')
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
  },
  {
    name: "dist",
    entry: './src/index.js',
    output: {
      filename: 'catalogue.js',
      library: 'catalogue',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      path: path.resolve(__dirname, 'dist')
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
        }
      ]
    }
  }
];
