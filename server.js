const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function response(request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(webpackConfig.devServer.port, 'localhost', function (err) {
  if (err){
		return console.log(err);
	}

  console.log("Listening on port %s!", webpackConfig.devServer.port);
});