"use strict";

var _webpackDevConfig = _interopRequireDefault(require("../webpack.dev.config.js"));

var _express = _interopRequireDefault(require("express"));

var _nodeProxyHttp = _interopRequireDefault(require("node-proxy-http"));

var _path = _interopRequireDefault(require("path"));

var _lodash = _interopRequireDefault(require("lodash"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

var _nodeProxy = (0, _nodeProxyHttp.default)(),
    proxy = _nodeProxy.proxy;

var port = process.env.PORT || 8080;
var production = process.env.NODE_ENV === 'production';
var indexPath, publicPath;

if (!production) {
  var compiler = (0, _webpack.default)(_webpackDevConfig.default);
  app.use((0, _webpackHotMiddleware.default)(compiler, {
    heartbeat: 2000
  }));
  app.use((0, _webpackDevMiddleware.default)(compiler, {
    publicPath: _lodash.default.get(_webpackDevConfig.default, 'output.publicPath'),
    stats: {
      colors: true
    }
  }));
  indexPath = _path.default.join(__dirname, '/../index.html');
  publicPath = _express.default.static(_path.default.join(__dirname, '../'));
} else {
  indexPath = _path.default.join(__dirname, '/../public/index.html');
  publicPath = _express.default.static(_path.default.join(__dirname, '../public'));
}

app.use('/public', publicPath);
app.use('/stylesheet', _express.default.static(_path.default.join(__dirname, '../stylesheet')));
app.use('/proxy', proxy);
app.use('*', function (_, res) {
  res.sendFile(indexPath);
});
app.listen(port);

if (production) {
  console.log('Production files are served');
}

console.log("Listening at http://localhost:".concat(port));
