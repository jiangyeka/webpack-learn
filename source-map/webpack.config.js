const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js', './src/index.html'],
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

            {

                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {

                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {

                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',

                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {

                test: /\.html$/,
                loader: 'html-loader'
            },
            {

                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true,
        hot:true
    },
    devtool: 'eval-source-map'
};
// 提供一种技术：提供源代码到构建后代码的一种映射（如果构建后代码出错，通过映射关系，追踪到源代码错误
// 参数[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
// source-map可以定位错误和错误代码的原位置
// inline-source-map 内联， 速度跟块 只生成一个
// hidden-source-map 错误代码错误原因，但是定位不到原代码
// eval-source-map  分布生成 错误代码位置可哈希值定位
//nosources 外部的 找到错误代码原因，但是没有任何源代码信息 和hidden一样防止泄露
//cheap 外部 cheap只能准确到行，source-map能具体到行的具体位置
//cheap-module 外部

// 开发环境考虑速度和调试
// 速度 eval>inline>cheap>...
//  cheap-module-source-map
// 开发，源代码隐藏，调试友好