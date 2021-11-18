const {resolve}=require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: resolve(__dirname,'build')
    },
    plugins: [new HtmlWebpackPlugin()],
    mode:"development"
}