import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import common from './webpack.common';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins : [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { map: { inline: false } }
      })
    ]
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ] }
    ]
  }
});
