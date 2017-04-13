const express = require('express')
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

const compiler = webpack(config);

const server = express();

server.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.puplicPath,
  noInfo: true,
}));

server.use(webpackHotMiddleware(compiler));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

server.listen('3333', (error) => {
  if (error) {
    console.log(error);
    return;
  };
  console.log('listening on http://localhost:3333');
});
