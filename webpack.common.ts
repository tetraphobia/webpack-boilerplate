import { paths } from './config/paths'

import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import PrettierPlugin from 'prettier-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import { Configuration } from 'webpack'

const common: Configuration = {
    entry: [`${paths.src}/index.ts`],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: paths.build,
        filename: 'bundle.js',
        publicPath: '/',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.src}/html/index.html`,
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.pub,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        new PrettierPlugin(),
    ],
}

export default common