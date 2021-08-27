const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge({
  mode: 'production',
  output: {
    // contenthash: 根据文件内容生成hash
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].[contenthash].js'
  }
}, base)
