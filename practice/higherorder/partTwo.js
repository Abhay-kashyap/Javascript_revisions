// let arr=[2,3,4];
// // arr.forEach((e,i,a)=>{
// // console.log(e,i,a);
// // })
// // arr.forEach(function display(e,i,a){
// //     setTimeout((display)=> {
// //         console.log(e,i,a)
// //     }, 3000);

// // })
// const heros=['spider','batman','superman','ironman','hulk','thor'];
// // heros.forEach((curEle)=>{
// //     console.log(curEle.toUpperCase())
// // })
// // const sumOfArr=(arr)=>{
// //     let total =0;
// //     arr.map((e)=>{
// //         total=total+e;
// //     })
// //     return total
// // }
// // console.log(sumOfArr(arr))
// // console.log(heros)
// // const herosWithMan=heros.filter((CurEle)=>{
// //     return CurEle.endsWith('man')
// // });
// // console.log(herosWithMan)
// const shopping=[20,30,50];
// const sumCartBill=shopping.reduce((prev,curEle)=> prev + curEle ,0)
// console.log(sumCartBill)


// const gameScore=[200,300,310,200,150,];
// console.log(typeof gameScore[1])
// const gameScoreCheck=gameScore.every((curEle) => {
//  return   typeof curEle === 'number'
// })
// console.log("check",gameScoreCheck)

// const aboveScore = gameScore.find((e)=>{
//     return e>200;
// })
// console.log(aboveScore)


// // some 
// // const array=[1,2,3,4,5];
// // const even=(e)=> e%2 === 0;
// // console.log(array.some(even));
// function isBiggerThan10(curEle,index,a){
// return curEle>10
// }
// console.log([2,3,,4,5,8,9,4].some(isBiggerThan10))
// console.log([2,15,547,78,45,55].some(isBiggerThan10))
// console.log([12,3,4,2,3].some((x)=>x>10))



// const fruits=['apple','banana','grapes','mango'];
// function checkAvailabilty(curEle,val){
// return curEle.some((curEle)=> curEle === val)
// }
// console.log(checkAvailabilty(fruits,'kela'))
// console.log(checkAvailabilty(fruits,'apple'))


// const isReverse=(str)=>{
//     for(let i=str.length -1 ;i>=0;i--){
//         console.log( str[i])
//     }
// }
// const input=isReverse('hello');
// setTimeout(input,2000)
// setTimeout((str)=>{
    
//         for(let i=str.length -1 ;i>=0;i--){
//             return str[i]
//         }
    
// },2000)
// let input='hello'
const val=setTimeout((input) => {
    let results=''
    for(let i=input.length-1;i>=0;i--){
        results +=input[i]
    }
    return results
    
}, 2000,'example');
console.log(val);
