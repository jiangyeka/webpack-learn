import '../css/iconfont.css'
import  '../css/index.less'
import print from "./print";
function  a(x,y){
    return x+y;
}

console.log('awef')
print()
console.log(a(1,2))

if(module.hot){
    module.hot.accept('./print.js',function (){

    })
}