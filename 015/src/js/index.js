// import '@babel/polyfill'
const  add=(a, b) =>{
  return a + b;
}
console.log(add(1, 3));
const promise= new Promise((resolve)=>{
  setTimeout(()=>{
    console.log('end')
    resolve()
  },1000)
})

console.log(promise)

