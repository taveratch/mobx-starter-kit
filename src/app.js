import config from '../webpack.dev.config.js'
import express from 'express'
import nodeProxy from 'node-proxy-http'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express()

const { proxy } = nodeProxy()
const port = (process.env.PORT || 8080)
const production = process.env.NODE_ENV === 'production'

let indexPath, publicPath

if (!production) {
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000
  }))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
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