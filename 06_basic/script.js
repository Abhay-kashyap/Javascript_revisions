// // sum of 1 student
// var a=10,b=20;
// var sum1 =a+b;
// console.log(sum1);
// // sum of 2 student
// var a=20,b=20;
// var sum2 =a+b;
// console.log(sum2);
// // sum of 3 student
// var a=30,b=20;
// var sum3 =a+b;
// console.log(sum3);
// function sumOfStudent(a,b){
// return a+b;
// }
// console.log(sumOfStudent(10,30))
// function greet(name){
//     console.log('hello ' + name + ' welcom to the js course ' )
// }
// greet('ayush')
// greet('vishal')

// function expressions
// var result = function sum(a, b) {
//   var sum = a + b;
//   console.log("the value of " + sum);
//   return sum;
// };
// console.log(result(5, 10));

// /***anonumus function */
// // var add=function (a,b){
// //     console.log(a+b);
// // }
// // add(30,50)

// /****return statements */
// function add(a, b) {
//   console.log(" hello  i am function");
//   return a + b;
// }
// // var result=add(5,5);
// // console.log(result)
// // console.log('the sum of two number is ' + result)
// // console.log(add(5,10))
// // console.log(add(3,10))
// // console.log(add(8,10))
// // add(30,10);
// // IIFE Function
// // var result=(function (a,b){
// // return a+b;
// // })(5,10);
// // console.log('the sum of two variables is : ' +result);
// // var power =(function(l,w){
// //     return 2*(l+w)
// // })(3,10);
// // console.log(power)

// /***************** write a function calculator that takes two numbers and an operator as parameter and returns the result of the operation.the function  */
// function calculator(a, b, op) {
//   switch (op) {
//     case "+":
//       console.log(`the sum of ${a} and ${b} is : ${a + b}`);
//       break;
//     case "-":
//       console.log(`the sub of ${a} and ${b} is : ${a - b}`);
//       break;
//     case "*":
//       console.log(`the mul of ${a} and ${b} is : ${a * b}`);
//       break;
//     case "/":
//         if(b===0){
//             console.log('zero is not allowed')
//         }else{

//             console.log(`the div of ${a} and ${b} is : ${a / b}`);
//         }
//       break;
//     default:
//       console.log("enter wrong operator");
//   }
// }
// calculator(10,5,"4")


const isReverse = (value) => {
    let reverse =''
for(let i = value.length - 1; i>=0 ; i--){
    reverse += value[i];
} 
return reverse
}
console.log(isReverse('hello'));
// plaindrome if you reading any string starting to end and read to end to start is same is called plaindrome
/**** level level radar radar */
const plaindrome=(str)=>{
    let reverse=""
    for(let i=str.length-1;i>=0;i--){
        reverse =reverse+ str[i];
    }
    if(str===reverse){
        return 'string is plaindrome '
    }else{
        return 'string is not plaindrome';
    }
}
console.log(plaindrome('radar'))