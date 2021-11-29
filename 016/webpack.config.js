const{resolve}=require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
// 复用
const commonCssLoader=[
    MiniCssExtractPlugin.loader,
    'css-loader',{
    // 还需要在package.json定义browselist 默认使用生产环境配置，修改在webpack。config.js开始声明process.env.NODE_ENV=
    loader: "post-loader",
        options: {
        ident:'postcss',
            // 含义：使用这个插件里面的预设对兼容性做处理
            plugins: ()=>[
            require('postcss-preset-env')()
        ]
    }
}
]
// 一旦有文件匹配多个loader，要制定优先级 先eslint 在babel
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,'build')
    }, module: {
        rules: [{
            test: /\.css$/,
            use:[...commonCssLoader]
        },{
            test: /\.less$/,
            use:[ ...commonCssLoader,'less-loader' ]
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: "pre",
            loader: "eslint-loader",
            options: {
                fix:true
            }
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets:['@babel/preset-env',{
                    useBuiltIns:'usage',
                    corejs:{
                        version:3
                    },
                    targets:{
                        chorme:'60',
                        firfox:'50'
                    }
                }]
            }
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
                limit:8*1024,
                name:'[hash:10].[ext]',
                outputPath:'imgs',
                esModule:false
            }
        },{
            test: /\.html$/,
            loader: "html-loader"
        },{
            exclude: /\.(jpg|png|gif|js|css|less|html)$/,
            loader: "file-loader",
            options: {
                outputPath: 'media'
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: "production"
}