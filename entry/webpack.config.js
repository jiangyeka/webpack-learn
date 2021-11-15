const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
// entry为多入口 所有入口文件只会形成一个chunk，输出出去只有一个bundle
module.exports = {
    // entry: ['./src/index.js','./src/add.js'], 开发环境 用途 HMR功能中让html热更新
    // 多入口，有几个入口，就有几个bundle，几个chunk
    entry: {
        index:'./src/index.js',
        add:'./src/add.js'
    },

    output: {
        // chunk默认是main
        filename: "[name].js",
        path: resolve(__dirname,'build')
    },
    plugins: [new HtmlWebpackPlugin()],
    mode:'development'
}