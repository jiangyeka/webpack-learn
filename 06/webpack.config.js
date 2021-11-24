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
            type: "asset",
            options: {
                name:'[hash:10].[ext]'
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }) ],
    mode:"development"
}