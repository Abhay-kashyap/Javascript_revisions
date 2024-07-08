// let i=1;
// while(i<=10){
    
//     var mul=3*i;
//     console.log(`3 * ${i} = ${mul}`)
//     i++;
// }
// var num =1;
// while(num<=10){
//     console.log('5 * ' + num + ' = ' + 5 * num);
//     num++;
// }
// let userInput;
// let postiveNumber;
// for (;isNaN(postiveNumber) || postiveNumber < 0;){
// userInput=prompt('enter a postive number ');
// postiveNumber=parseFloat(userInput);
// }
// console.log('you entered a positive number');
// var sum=0;
// debugger;
// for(var num=1;num<=10;num++){
//     sum=sum+num;
// }
// console.log(sum);
// var sum=0;
// var num=1;
// do{
//     sum=sum+num;
//     num++;
// }while(num<=10);
// console.log(sum);



// ******write a program to check is number is prime or not/ 
// var num=12;
// var isPrime=true;
// // for debugging use
// debugger;
// for(var i=2;i<num;i++){
//     if(num%i==0){
//         isPrime=false;
        
//     }
// }
// if(isPrime){
//     console.log('number is prime');
// }else{
//     console.log('number is not prime');
// }
// for(var num=1;num<=10;num++){
    
//     console.log("5 * " + num  + " = "+ 5*num)
// }
var year=2004;
if(year % 4 ===0 && year % 100 !=0 || year%400==0){
    console.log("it's is a leap year")
}else{
    console.log("it's is not a leap year");

}
for(var i=1;i<=5;i++){
    var pattern ="";
    for(var j=1;j<=i;j++){
        pattern=pattern + " * "; 
    }
    console.log(pattern)
}