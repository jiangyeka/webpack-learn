const{resolve}=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
// 样式文件在js文件之中
// 插件 mini-css-extract-plugin

process.env.NODE_ENV='development'
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
             use:[MiniCssExtractPlugin.loader,
                'css-loader',
                 // css兼容性处理 :postcss-->postcss-loader postcss-preset-env
                 {
                     loader: "postcss-loader",
                     options: {
                         ident:'postcss',
                         // 帮助postcss找到package.json中的browselist里面的配置，通过制定配置加载制定css样式
                         plugins:()=>[require('postcss-preset-env')()]
                     }
                 }
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin(
        {filename: 'css/built.css'}
    )
    ],
    mode: "development"
}