// // ES Moudele规范
// // 浏览器不认识，但是webpack认识

// // var cat = require('./cat.png');
// import cat from './cat.png';
// // var Header =require('./header')
// console.log(cat);
import cat from './cat.png';
var img = new Image();
img.src = cat;
var root = document.getElementById('root');
root.append(img);
