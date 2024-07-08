// // var name ='thapa';
// // if(1){
// //     var name ="vinod"
// //     console.log(name)
// // }
// // name='technical';
// // console.log(name)

// /**** example 2 with the help of let keyword */
// // let name ='thapa';
// // if(1){
// //     name ='vinod';
// //     console.log(name);
// // }
// // name='technical';
// // console.log(name)

// // const name ='thapa';
// // if(1){
// //     const name ='vinod';
// //     console.log(name);
// // }
// // name='technical';
// // console.log(name)

// // if(1){
    
// //     const name='vinod';
// //     console.log(name);
// // }

// // console.log(name)


// // template literals
// let firstName ='java'
// let lastname ='script';
// let fullName=`${firstName} ${lastname} wow this is "wonderfull programming language"`
// console.log(fullName);


// // string interpolation
// let age =30;
// let message=`i am ${age} years old`;
// console.log(message);
// // multiline string
// // let multiLineString=`hello this is the string interpolation method uses by the help of backticks `;
// // console.log(multiLineString);
// for(let num=1;num<=10;num++){

//     // console.log("5 * " + num + " = " + 5 * num);
//     console.log(` 5 *  ${num} = ${5 * num}`)
// } 

// /*** default parameter  */
// function sum (a=20,b=10){
//     return a+b;
// }
// console.log(sum());
// var sum=function(a,b){
//     let result=`the sum of ${a} and ${b} = ${a+b} `;
//     return result;
// }
// console.log(sum(5,2323));
// var sum= (a,b) => {return `the sum of ${a} and ${b} = ${a+b} `;}
  
// console.log(sum(5,2323));
//  const square=a=> `the suare of ${a} is : ${a*a}`;
//  console.log(square(5));
//  const greet=()=>console.log(`hello how are you`);
//  greet();
// const isPlainDrome=(str)=>{
//     let reverse='';
//     for(let i=str.length -1; i>=0; i--){
//          reverse= reverse + str[i];
//         }
//         if(str=== reverse){
//             return 'string is plaindrome '
//         }else{
//             return 'no plaindrome'
//         }
// }
// console.log(isPlainDrome('level'))