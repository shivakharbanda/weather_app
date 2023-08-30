const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
    },
  devtool: "inline-source-map",
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',
      template: './src/template.html',

    }),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module : {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};