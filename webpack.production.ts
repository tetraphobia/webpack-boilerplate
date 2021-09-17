import { paths } from './config/paths'
import common from './webpack.common'
import merge from 'webpack-merge'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

import { Configuration } from 'webpack'

const production: Configuration = {
    mode: 'production',
    devtool: false,
    output: {
        path: paths.build,
        publicPath: './',
        filename: 'js/[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css',
        }),
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [new CssMinimizerPlugin(), '...'],
    //     runtimeChunk: {
    //         name: 'runtime',
    //     },
    // },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
}

export default merge(common, production)
