import webpack from 'webpack';
import path from 'path';

export default {
//   debug: true,
  devtool: 'inline-source-map',
//   noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
   new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      // options: {
        noInfo: false,
        debug: true
      // }
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}