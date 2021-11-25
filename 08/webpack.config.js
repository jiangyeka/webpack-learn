const {resolve}=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            // loader配置
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },{
            // 这里处理的只是样式中的图片资源
                test: /\.(jpg)|(png)|(gif)$/,

                // use: [{loader: "url-loader", options: {limit:8192,name:'[hash:10].[ext]',esModule:false}}],type:'javascript/auto'
                type: "asset",
                parser: {
                    dataUrlCondition:{
                        maxSize:8192
                    }
                },
                generator: {
                    filename: 'imgs/[hash:10].[ext]'
                }

            },{
            // html-loader用CommonJS处理
                test: /\.html$/,
                loader: "html-loader"
            },{
                exclude: /\.(html|js|css|less|png|jpg|gif)/,

                type: "asset",
                generator: {
                    filename:'media/[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {template: "./src/index.html"}
    )],
    devServer: {
        static:resolve(__dirname,'build'),
        port:3000,
        compress:true,
        open:true
    },
    mode: "development"
}