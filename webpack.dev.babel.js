import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';

import common from './webpack.common';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    noInfo: true,
    before: app => {
      app.get('/recipes', (req, res) => {
        res.json([
          { "id": 1, "title": "Fish Tacos", "ingredients": [ "Fish", "Tacos" ], "steps": [ "Cook fish", "Put in tacos" ] },
          { "id": 2, "title": "Ham Sandwhich", "ingredients": [ "Ham", "Bread", "Mustard" ], "steps": [ "Spread mustard on bread", "Add ham" ] },
          { "id": 3, "title": "Banana Smoothie", "ingredients": [ "Banana", "Almond Milk" ], "steps": [ "Blend banana and almond milk", "Serve" ] }
        ])
      })
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
