const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  modules: {
    rules: [ //rules
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "defaults"
              }]
            ]
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SCP 1.6',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }), // file name '[name].css' by default
  ],
}