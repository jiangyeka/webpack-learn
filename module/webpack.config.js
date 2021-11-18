const {resolve}=require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/[name].js",
        path: resolve(__dirname,'build'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:['style-loader','css-loader']
        },{
            test: /\.js$/,
            // 排除
            exclude: /node_modules/,
            // 限制
            include: resolve(__dirname,'src'),
            // enforce:'post',
            enforce: "pre",
            loader: "eslint-loader"
        },{
            oneOf: []
        }]
    },
    plugins: [new HtmlWebpackPlugin() ],
    mode: "development"
}