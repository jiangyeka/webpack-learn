const {resolve}=require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/[name].js",
        path: resolve(__dirname,'build'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin() ],
    mode: "development",
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
    devServer: {
        // 运行代码的目录
        contentBase:resolve(__dirname,'build'),
        // 启动压缩gzip
        compress:true,
        port:5000,
        host:'localhost',
        open:true,
        // HMR
        hot:true,
        // 监视文件变化,一旦发生变化，重新进行reload
        watchContentBase:true,
        clientLogLevel:'none',
        // 除了一些基本信息外，不会显示一些其他内容
        quiet:true,
        watchOptions:{
            ignored:/node_modules/
        },
        overlay:false,
        // 开发环境跨域问题
        proxy:{
            // 一旦devserver服务器接收到/api/xxx的请求，就会把请求转换到另外一个服务器
            '/api':{
                target:'http://localhost:3000',
                pathRewrite:{'^/api':''}
            }
        }

    }
}