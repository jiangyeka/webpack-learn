const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },{
            test: /\.(jpg|png|gif)$/,
            // url loader依赖file loader
            loader: "url-loader",
            options: {
                limit:1024,
                name:'[hash:5].[ext]'
            }
        },{
            // 负责引入html中的img
            test: /\.html$/,
            loader: "html-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    mode: "production"
}