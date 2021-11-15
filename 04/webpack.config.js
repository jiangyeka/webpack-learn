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
        // 功能：默认创建一个空的html，自动引入打包输出所有的资源（js/css)
        // 可以配置模板
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })

    ],
    mode:"development"

}