const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p1 sucess')
        reject('p1 failed')
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p2 sucess')
        reject('p2 failed')
    },5000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p3 sucess')
        reject('p3 failed')
    },2000)
})
// ➡️ Success Case of Promise All
//  first cases success -: It wait for all promises to be settled and give the results
// ➡️failure Case:
// Failure Case: if any one them these promise failure occur of that promises then how much time to complete it takes that then resject the result shows only that promises and not wait for all promises to be setteled
// it also called Fail Fast
// Promise.all([p1,p2,p3]).then((res)=>console.log(res))
// .catch((e)=>{
//     console.error(e)
// })



// Here is Promise.allSetteled
// ➡️ Sucess Case of PromiseSettled:
// It just similar like that promise.all and it wait for all promises setteled and collect the results give back
// ➡️ In failure Cases if any one of them get rejected it will wait for all setteld then gives result
// Promise.allSettled([p1,p2,p3])
// .then((res)=>console.log(res))
// .catch((e)=>console.error(e))


// here is the promises race
// Succces Case : if any one of them all these promises will be first  settled { even if sucess or failure } then get the result of that first settled promises 
// Promise.race([p1,p2,p3])
// .then((res)=>console.log(res))
// .catch((e)=>console.error(e))




//here is the promises of any
// It waits for any of them promises first suceess and in case of all of them promises failure it collects the result and give back aggregate error in the form error
Promise.any([p1,p2,p3])
.then((res)=>console.log(res))
.catch((e)=>
    {
        console.error(e)
        console.log(e.errors[0])
    }
)