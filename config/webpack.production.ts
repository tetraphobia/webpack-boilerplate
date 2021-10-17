import { Paths } from './paths.config'
import { Common } from './webpack.common'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import merge from 'webpack-merge'

import { Configuration } from 'webpack'

const production: Configuration = {
  ...Common,
  mode: 'production',
  devtool: false,
  output: {
    path: Paths.build,
    publicPath: './',
    filename: 'js/[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'js']
    }),
    new StylelintWebpackPlugin({
      extensions: ['css', 'scss', 'sass']
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

module.exports = merge(Common, production)
