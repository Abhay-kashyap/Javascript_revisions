// function h(x,fn){
//     console.log(x*x);
//     fn(x*x)
// }
// h(10,function fn(){
//     console.log('done with callback');
// })
// h(10,exec)
// function exec(n){
//     console.log('square value is ',n)
// }
console.log('start')
setTimeout(function fn(){
    console.log('timer is done 1')
},5000);
setTimeout(function fn(){
    console.log('timer done with 2')
},4000);
console.log('end');
// for(let i=0;i<100;i++){}