import { paths } from './paths'

import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import PrettierPlugin from 'prettier-webpack-plugin'
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
    resolve: {
        modules: [paths.src, 'node_modules/'],
        extensions: ['', '.js', '.ts'],
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
            title: 'Webpack Boilerplate',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.pub,
                    to: './',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        // new PrettierPlugin(),
    ],
}

export default common
