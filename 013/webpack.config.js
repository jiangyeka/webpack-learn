
const{resolve}=require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            //babel-loader @babel/core @babel/preset-env js兼容性处理
            // 基本js语法 @babel/preset-env
            //@babel/polyfill 暴力方式入口文件引入
            //按需加载core-js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    // 预设
                    presets:[['@babel/preset-env',{
                        useBuiltIns:'usage',
                        corejs:{
                            version:3
                        },
                        targets:{
                            chrome:'60',
                            firefox:'60',
                            ie:'9',
                            safari:'10',
                            edge:'17'
                        }
                    }]]
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    mode: "development"
}