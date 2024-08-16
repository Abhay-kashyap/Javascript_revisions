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