import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';

import common from './webpack.common';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    noInfo: true,
    proxy: {
      '/recipes': 'http://localhost:3001',
    }
  },
  plugins : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
});
