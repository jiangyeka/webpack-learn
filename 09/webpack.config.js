const{resolve}=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
// 样式文件在js文件之中
// 插件 mini-css-extract-plugin
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader',//创建style标签，然后样式放进去
            //  use:[MiniCssExtractPlugin.loader,
                'css-loader'//将css文件整合到js文件中
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    // new MiniCssExtractPlugin(
    //     {filename: 'css/built.css'}
    // )
    ],
    mode: "development"
}