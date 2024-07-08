// Math object in javascript 
// Math : the Math namespace object contains static properties and methods for mathematical constants and functions.
// Math work with the number type .It doesn't work with BigInt.
// 1 constants
// Math.pi :represents the mathematical constant pi;
// const piValue=Math.PI;
// console.log(piValue)


// basic operations
// Math.abs: how much is farest the number of zero suppose we enter 5 then it gives 5 and we give input -5 then it gives 5
// console.log(Math.abs(20))
// console.log(Math.abs(-115))


// math.round(x):rounds a number to the nearest integer
// const roundValue =Math.round(3.7);
// console.log(roundValue)
// Math.ceil: returns the value of x rounded up to its nearest integer:
// const ceilValues=Math.ceil(4.7);
// console.log(ceilValues);

// math.floor :returns the value of x rounds down nearest to the integer
// const floorValue=Math.floor(3.8);
// console.log(floorValue)

// math.trunc(x) returns the integer part of x
// const truncValue=Math.trunc(3.8);
// console.log(truncValue)//3 return only integer part

// difference between trunc and floor value 
// const floorValue=Math.floor(3.7);
// const truncValue=Math.trunc(3.7)
// console.log(floorValue)//3
// console.log(truncValue)//3


// const floorVal2=Math.floor(-3.7);
// const truncVal2=Math.trunc(-3.7);
// console.log(floorVal2);//4 lower value deta hai 
// console.log(truncVal2);//3



// exponential and logarithemic functions

// Math.pow(x,y):return the value of x to the power of y.
// console.log(Math.pow(2,5))
// console.log(2 ** 5)

// Math.sqrt() Math.sqrt(x) returns the square root of x:
// let squareRoot=Math.sqrt(125);
// console.log(squareRoot)

// Math.log(x) returns the natural logarithm of x;
// let logResult=Math.log(8);
// console.log(logResult)

// Math.log2(x) returns the base 2 logarithm of x .
let logResult=Math.log2(8);
console.log(logResult);



// interview questions

// math.random(): Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random()*100).toFixed(2)) 