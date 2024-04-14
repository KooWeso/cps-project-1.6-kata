const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Generator } = require('webpack');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name].[contenthash].[ext]', //describes the name of the assets (css, images, fonts) in the output folder - with their contenthash and file extension 
    filename: 'scripts/[name].[contenthash].js', //describes the name of the output file - with its contenthash (this one for js)
    clean: true, // when true, removes old dist files automatically with each build
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
    rules: [ //rules search for files with certain extensions (js, scss, png, etc.)
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
        use: [MiniCssExtractPlugin.loader, // third (last)(goes to line #60)
          "css-loader", // second
          "sass-loader" // runs first
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // predefined type by webpack
        generator: {
          filename: 'assets/imgs/[name].[contenthash][ext]',//tells where to put the images (creates 'assets/imgs' folder if it doesn't exist)
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[contenthash][ext]', // for icons
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', 
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]',// for fonts
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SCP 1.6', //lol
      filename: 'index.html',
      template: './src/index.html', //from where to get the template (./ works fine)
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
      // file name '[name].css' by default
    }),
  ],
}