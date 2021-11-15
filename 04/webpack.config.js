const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename: "built.js",
        path:resolve(__dirname,'build')
    },
    module: {
        rules: []
    },
// 处理html资源 下载 引入 使用html-web[ack-plugin
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode:"development"

}