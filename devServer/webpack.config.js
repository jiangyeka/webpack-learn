const{resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path:resolve(__dirname,'build')
    },
    module: {
        rules: [{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            // 排除
            exclude:/\.(css|js|html)$/,
            // webpack5不用file-loader 用asset file处理一些图片
            type: "asset"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }) ],
    mode:"development",

    // 开发服务器devServer类似nodmon
    // 只会在内存中编译打包，不会有任何输出
    // 启动指令 webpack-dev-server
    devServer: {
        static:resolve(__dirname,'build'),
        // 启动gzip压缩
        compress:true,
        port:3000,
        open:true
    }
}