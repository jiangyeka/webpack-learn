// webpack配置文件 CommonJS
const {resolve}=require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        // loader配置
        rules:[{
            // 对象
            test:/\.css$/,
            use:[
                // use数组执行顺序，栈顶到栈底
            //添加style标签，将js中的样式资源插入进行，添加到head其中
            //     <link href={}></link>
                'style-loader',
                // cssloader将css编译为CommonJS模块，里面是样式字符串
            'css-loader']
        },{
            test:/\.less$/,
            use:[
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
        // 详细配置
    },
    // plugin配置
    plugins:[],
    mode:'development'

}