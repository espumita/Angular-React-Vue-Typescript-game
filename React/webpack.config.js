import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import path from 'path';

export default {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'] },
    entry: [
       // './src/webpack-public-path',
       // 'react-hot-loader/patch',
       // 'webpack-hot-middleware/client?reload=true', 
        path.resolve(__dirname, 'src/root.tsx')
     ],
    output: { filename: 'bundle.js', publicPath: '/', path: path.resolve(__dirname, 'dist') },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
            //{ test: /\.css$/, loader: "style-loader!css-loader" },
            //{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            //{ test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            //{ test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/root.html",
            filename: "./index.html"
        }),
      //  new webpack.HotModuleReplacementPlugin()
    ]

}