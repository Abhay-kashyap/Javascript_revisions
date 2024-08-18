// function createPromises(){
//     return new Promise(function exec(resolve,reject){
//         setTimeout(function(){
//             console.log('timer done')
//             // reject('rejcted ')
//         },3000);
//     })
// }
// console.log('start');
// let x=createPromises();
// console.log('got a promise');
// x.then(function (value){
//     console.log('promise done',value)
// }).catch(function (value){
//     console.log('promise failed',value)
// }).finally(function(){
//     console.log('finally code runs')
// })
// console.log('end');
// for(let i=0;i<100000000;i++){
//     // some code
// }


// const cart=['shoes','pants','shirts'];
//there is the problem of inversion control
// and also passing this function createOrder its call or not 
// createOrder(cart,function(){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         });
//     });
// });

// createOrder(cart).then(function(orderId){
//    return proceedToPayment(orderId)
// }).then((paymentInfo)=>{
//     return showOrderSummary(paymentInfo)
// }).then((paymentInfo)=>{
//     return updateWalletBalance(paymentInfo)
// }).catch()
// promise are solved the problem of the inversion control and once object is resloved that give result and that function only call the once time,
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// });

// const GITHUB_API=`https://api.github.com/users/Abhay-Kashyap`
// const user= fetch(GITHUB_API)
// console.log(user)
// user.then((data)=>{
//     console.log(data.json())
// })


// how to create own promise 


// const cart=['shoes','pants','shirts'];

// const promise=createOrder(cart);
// // console.log(promise)    
// promise.then((orderId)=>{
//     console.log(orderId)
//     return orderId
// }).catch((e)=>{
//     console.log(e.message)
// })
// .then((orderId)=>{
//     return proceedToPayment(orderId)
// })
// .then((paymentInfo)=>{
//     console.log(paymentInfo)
// })
// .catch((e)=>{
//     console.log(e.message)
// })


// function createOrder(cart){
//     const pr=new Promise(function(resolve,reject){
//         if(!validateCart(cart)){
//             const err=new Error('card is not valid');
//             reject(err)
//         }
//         const orderId={
//             firstname:'akshay',
//             lastname:'saini'
//         }
//         if(orderId){
//             setTimeout(function(){

//                 resolve(orderId)
//             },5000)
//         }
//     })
//     return pr;
// }
// function validateCart(cart){
//     return false;
// }
// // console.log(promise)
// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         const err=new Error('payment not done')
//     reject(err)    
//     })
// }


// we have four asynchronus api
const cart=['shoes','pants','shirt']
const promise=createOrder(cart);
promise.then((orderId)=>{
    return orderId;
}).then((orderId)=>{
return proceedToPayment(orderId)
}).then((msg,amt)=>{
    console.log(msg , amt)
    return showOrderSummary(msg,amt)
})
.then((paymentInfo,amt)=>{
    return updateWallet(paymentInfo,amt)
}).then((p,a)=>{
console.log(p,a)
})

function createOrder(){
    return new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const error=new Error('cart is not valid')
            reject(error)       
        }
        const orderId='1234';
        if(orderId){

            console.log(orderId);
            resolve(orderId)
        }
    })
}
function validateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve(`message :Payemnt Succesful ${orderId} `)
    })
}
function showOrderSummary(paymentInfo,amt){
return new Promise((resolve,reject)=>{
    if(amt>2000){
        reject(new Error('please buy more for discount'))
    }
    else{
        resolve('you order done')
    }
})
}
function updateWallet(paymentInfo,amt){
    console.log(`your wallet is also updated`)
}