const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name].[contenthash].[ext]', //describes the name of the assets (css, images, fonts) in the output folder - with their contenthash and file extension 
    filename: 'scripts/[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assets/imgs',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'assets/fonts',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SCP 1.6',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
      // file name '[name].css' by default
    }),
  ],
}