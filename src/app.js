const config = require('../webpack.dev.config.js')
const express = require('express')
const nodeProxy = require('node-proxy-http')
const path = require('path')
const _ = require('lodash')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()

const { proxy } = nodeProxy.default()
const port = (process.env.PORT || 8000)
const production = process.env.NODE_ENV === 'production'

let indexPath = '', publicPath

if (!production) {
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000
  }))
  app.use(webpackDevMiddleware(compiler, {
    publicPath: _.get(config, 'output.publicPath'),
    stats: {
      colors: true
    }
  }))
  indexPath = path.join(__dirname, '/../index.html')
  publicPath = express.static(path.join(__dirname, '../'))
} else {
  indexPath = path.join(__dirname, '/../public/index.html')
  publicPath = express.static(path.join(__dirname, '../public'))
}

app.use('/public', publicPath)
app.use('/stylesheet', express.static(path.join(__dirname, '../stylesheet')))
app.use('/proxy', proxy)
app.use('*', function (_, res) { res.sendFile(indexPath) })

app.listen(port)

if (production) {
  console.log('Production files are served')
}

console.log(`Listening at http://localhost:${port}`)