const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const NotifierPlugin = require('webpack-Notifier')
const merge = require('webpack-merge')
const loaderConfig = require('./webpack.loader.config.js')
const { publicPath, alwaysNotify } = require('../config.js')

const config = merge(loaderConfig, {
  mode: process.env.NODE_ENV,
  target: 'web',
  output: {
    filename: '[name].js'
  },
  entry: {
    'client-bundle': join(__dirname, '../src/', 'index.js')
  },
  output: {
    path: join(__dirname, '../dist'),
    publicPath
  },
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      vue: join(__dirname, '../node_modules/vue/dist/vue.runtime.js'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(__dirname, '../index.html'),
      minify: process.env.NODE_ENV === 'production' ? { collapseWhitespace: true, minifyJS: true, minifyCSS: true } : false
    }),
    new NotifierPlugin({
      title: '编译完成...',
      alwaysNotify,
      contentImage: join(__dirname, '../logo.png')
    })
  ]
})

module.exports = config
