import path from 'path';

export default {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' }] }
    ]
  },
  mode: 'development'
  // ,
  // devTool: 'inline-source-map'
}