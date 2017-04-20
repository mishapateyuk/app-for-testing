const express = require('express')
const path = require('path');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const getTestsDescriptions = require('./routes/getTestsDescriptions');
const getTestPreviewInfo = require('./routes/getTestPreviewInfo');
const compiler = webpack(config);

const server = express();

server.use(bodyParser.json());

//-----routes-------------------------------------------------------------------
server.use('/api/get-tests-descriptions', getTestsDescriptions);
server.use('/api/get-test-preview-info', getTestPreviewInfo);
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
