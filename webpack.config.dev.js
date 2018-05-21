import path from 'path';

export default {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  }
}