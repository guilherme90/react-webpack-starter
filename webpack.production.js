module.exports = (webpack, config) => {
  config.entry.push(
    './index.js'
  )
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  )

  babelSettings.plugins.push('transform-react-inline-elements')
  babelSettings.plugins.push('transform-react-constant-elements')

  return config
}