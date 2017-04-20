const express = require('express')
const path = require('path');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const compiler = webpack(config);
const api = require('./routes/api/api.js');

const server = express();

server.use(bodyParser.json());

//-----routes-------------------------------------------------------------------
server.use('/api', api);
//-----end-routes---------------------------------------------------------------

server.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
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
