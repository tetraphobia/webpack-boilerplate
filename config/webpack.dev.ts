import { Paths } from './paths.config'
import { Common } from './webpack.common'

import { Configuration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import merge from 'webpack-merge'

interface DevConfiguration extends Configuration {
    devServer?: WebpackDevServerConfiguration
}

const dev: DevConfiguration = {
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
