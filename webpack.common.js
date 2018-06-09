import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: [
      'whatwg-fetch'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: 'JS Dev Env'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [[ 'env', { modules: false } ]]
        }
      }
    ]
  }
};
