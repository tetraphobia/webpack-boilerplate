// noinspection JSUnusedGlobalSymbols

import { Paths } from './paths.config'
import { Common } from './webpack.common'
import merge from 'webpack-merge'

import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const dev: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: Paths.pub
    },
    watchFiles: [`${Paths.src}/**/*`, `${Paths.pub}/**/*`],
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = merge(Common, dev)
