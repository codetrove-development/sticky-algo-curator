const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = {
  context: __dirname,
  entry: {
    StickyAlgo: './src/StickyAlgo'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
}

const devConfig = merge( baseConfig, {
  devtool: 'source-map',
  output: {
    path: __dirname + "/build",
    filename: "sticky-algo.js",
    libraryTarget: "umd",
    library: "StickyAlgo"
  }
})

const prodConfig = merge( baseConfig, {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "sticky-algo.min.js",
    libraryTarget: "umd",
    library: "StickyAlgo"
  }
})

module.exports = ( env, argv ) => {
  if ( argv.mode === 'development' ) {
    return devConfig
  }

  return prodConfig
}