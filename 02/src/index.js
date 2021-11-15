// 开发环境 ：命令 webpack ./src/index.js -o ./build/build.js --mode=development
// -o 就是输出
// 生产环境：命令 webpack ./src/index.js -o ./build/build.js --mode=production
// webpack可以将ES6 Module编译为浏览器可以识别的Moudle
import data from './package.json'
import  './index.css'
console.log(data)
function add(x,y){
    return x+y
}

console.log(add(1,2))