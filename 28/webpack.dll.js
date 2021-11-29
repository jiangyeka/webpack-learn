// webpack --config webpack.dll.js
const {resolve}=require('path')
const webpack=require('webpack')
module.exports = {
    entry:{
        jquery:['jquery'] //name是jquery
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname,'dll'),
        library: '[name]_[hash]'
    },
    plugins: [
        // 打包生成一个manifest.json 提供映射关系
        new webpack.DllPlugin({
            name: "[name]_[hash]",
            path: resolve(__dirname,'dll/manifest.json')
        })
    ],
    mode:"production"
}
// 将某些包单独打包