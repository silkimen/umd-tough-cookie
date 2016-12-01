var path = require('path');

module.exports = {
  entry: 'tough-cookie',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'umd-tough-cookie.js',
    libraryTarget: 'umd',
    library: 'ToughCookie'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js'],
    alias: {
      net: path.resolve(__dirname, 'polyfills/net.js')
    }
  }
};
