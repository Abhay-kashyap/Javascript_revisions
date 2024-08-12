function createPromises(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function (){
            console.log('timer done');
            reject('done')
        },3000)
    })
}
async function consume(){
try{
        console.log('inside function')
        const response=await createPromises();
        console.log('response is ',response)
    }catch(err){
        console.log('handled error',err)
    }
}
console.log('start');

console.log(consume());
console.log('end');