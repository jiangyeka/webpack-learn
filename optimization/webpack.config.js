const {resolve}=require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const TerserWebpackPlugin=require('terser-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname,'build'),
        chunkFilename: "js/[name].[contenthash:10]_chunk.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin() ],
    // optimization在生产环境中才有意义
    mode: "production",
    // 解析模块
    resolve: {
        // 配置解析模块路径别名
        alias: {
            $css:resolve(__dirname,'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js','.json','.css'],
        // 告诉webpack解析模块是找那个目录
        modules: [resolve(__dirname,'../node_modules'),'node_modules']
    },
    // 优化打包策略
    optimization: {
        splitChunks:{
            chunks: "all",
            // 默认值
            // minSize: 30*1024,
            // maxSize: 0,
            // // 要提取的chunk最少被引用一次
            // minChunks: 1,
            // // 按需加载时候并行加载的文件的最大数量
            // maxAsyncSize: 5,
            // // 入口文件最大并行请求数量
            // maxInitialRequests: 3,
            // automaticNameDelimiter: "~" ,//名称连接符
            // name: true, //可以使用命名规则
            // cacheGroups: {
            // // nodemodules文件会被打包在vendors组的chunk中 vendors~1.js
            //     vendors:{
            //     test:/[\\/]node_modules[\\]/,
            //     priority: -10
            //     },
            //     default:{
            //         // 要提取的chunk最少被引用2次
            //         minChunks: 2,
            //         // 优先级
            //         priority: -20,
            //         // 如果当前打包模块和之前已经提取的为同一个，就会服用
            //         reuseExistingChunk: true
            //     }
            // }
        },
        // 将当前模块的记录其他模块的hash值单独打包为一个文件
        // 解决修改a文件导致的其他文件的hash值的变化
        runtimeChunk: {
            name:entrypoint=>`runtime-${entrypoint.name}`
        },
        // 配置生产环境的压缩方案
        minimizer: [new TerserWebpackPlugin({
            // 开启缓存
            cache:true,
            // 开启多进程打包
            parallel:true,
            // 启用source-map
            sourceMap:true
        })]


    }

}