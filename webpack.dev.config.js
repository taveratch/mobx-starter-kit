const webpack = require('webpack')

const path = require('path')

module.exports = {
  devtool: 'eval',
  mode: 'development',

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy']
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.ts|\.tsx$/,
        use: 'awesome-typescript-loader',
        include: __dirname
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles')
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  }
}