import { Paths } from './paths.config'

import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import { Configuration } from 'webpack'

export const Common: Configuration = {
  entry: [`${Paths.src}/index.ts`],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [Paths.src, '../node_modules/'],
    extensions: ['', '.js', '.ts']
  },
  output: {
    path: Paths.build,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${Paths.src}/html/index.html`,
      filename: 'index.html',
      title: 'Webpack Boilerplate'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: Paths.pub,
          to: './',
          globOptions: {
            ignore: ['*.DS_Store']
          },
          noErrorOnMissing: true
        }
      ]
    })
  ]
}
