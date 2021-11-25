
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
            // 语法检查 eslint -loader eslint
            {
                //eslint-config-airbnb-base
                // 规则设置 package.json airbnba规则
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix:true
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    mode: "development"
}