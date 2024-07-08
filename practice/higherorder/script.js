// const powerTwo=(n)=>{
//     return n ** 2
// }
// const powerCube=(powerTwo,n)=> powerTwo(n) * n;
// console.log(powerCube(powerTwo,5))
// function sayHello(){
//     return ()=>{
//         return 'hello '
//     }
// }
// let guessValue=sayHello();
// console.log(guessValue());



// const highOrder=n=>{
//     const oneFun=m=>{
//         const twoFun=p=>{
//             return n+m+p;

//         }
//         return twoFun
//     }
//     return oneFun
// }


// console.log(highOrder(2)(3)(4))
// let marks=[2,4,5,8,9];
// const sumArr=(arr)=>{
// let total=0;
// arr.forEach(function(e) {
// total =total+e;
// });
// return total    
// }
// console.log(sumArr(marks))
// function oneMoreHello(){
//     console.log(parseInt(Math.random() * 10))
// }

// // setInterval(oneMoreHello,1000)
// setTimeout(oneMoreHello,2000)




let emp={
    id :101,
    name:'sanket',
    age:26
}

let keys=Object.keys(emp);
console.log(keys);
let valuesOfObj=Object.values(emp);
console.log(valuesOfObj)

let enteries=Object.entries(emp);
console.log(enteries);

// freeze
// Object.freeze(emp)
Object.seal(emp);//only update allows
delete emp.name
emp.id=100
emp['address']='random'
console.log(emp)



// assign value one object to another object values
let o=Object.assign({x:10},emp);
console.log(o);
