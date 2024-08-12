function createPromises(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function(){
            console.log('timer done')
            // reject('rejcted ')
        },3000);
    })
}
console.log('start');
let x=createPromises();
console.log('got a promise');
x.then(function (value){
    console.log('promise done',value)
}).catch(function (value){
    console.log('promise failed',value)
}).finally(function(){
    console.log('finally code runs')
})
console.log('end');
for(let i=0;i<100000000;i++){
    // some code
}