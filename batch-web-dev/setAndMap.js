// let emptySet=new Set();
// console.log(emptySet.size);
// let myArr=[1,2,3,4,5,3,2];
// let newSet=new Set([...myArr]);
// console.log(newSet);
// newSet.add(9);
// newSet.clear()
// console.log(newSet)
// console.log(newSet.has(9));




//******************************
//set difference 
// function setDifference(setA,setB){
// return new Set([...setA].filter(el=>![...setB].includes(el)))
// }

// let setA=new Set([1,2,3,4]);
// let setB=new Set([1,4,5]);
// console.log(setDifference(setA,setB));




//******************************** */

// let map=new Map();
// console.log(map.size);


// let arr=[
//     [1,"Mithun"],
//     [2,"alka"],
//     [3,"prabir"],
//     [4,"shivam"],
//     [5,"vinay"]
// ];
// let newMap=arr.map((currEle)=>map.set(currEle[0],currEle[1]));
// console.log(newMap);



// const a =new Set([1,2,3,]);
// const b=new Map([
//     [1,"one"],
//     [2,"two"],
//     [3,"three"]
// ]);
// console.log(a.union(b))
// const a = new Set([1, 2, 3]);
// const b = new Map([
//   [1, "one"],
//   [2, "two"],
//   [4, "four"],
// ]);
// // a.clear()

// //console.log(a); // Set(4) {1, 2, 3, 4}
// const mySet=new Set();
// mySet.add(1)
// mySet.add(5)
// mySet.add(5)
// mySet.add("some text")
// console.log(mySet)
// const o={a:1,b:2};
// mySet.add(o)

// mySet.delete(5)
// console.log(mySet.has(5))
// mySet.add(5)
// console.log(mySet);

// for(let item of mySet){
//     console.log(item)
// }
// for(const item of mySet.keys()){
//     console.log(item)
// }
// for(const item of mySet.values()){
//     console.log(item)
// }


// //key and value are the same here
// for(const [key,value] of mySet.entries()){
//     console.log(key)
// }
// //  convert object to array object with array.from 
// // const myArr =Array.from(mySet);
// // mySet.add(document.body);
// // console.log(mySet.has(document.querySelector("body")));



// // convert set into Array
// const myset2=new Set([1,2,3,4]);
// console.log(myset2.size);

// console.log([...myset2]);


// const intersection = new Set([...mySet].filter(el=>myset2.has(el)));
// console.log(intersection)
// console.log(mySet)
// console.log(myset2)
// const difference=new Set([...mySet].filter(el=>!myset2.has(el)));
// console.log(difference)


// myset2.forEach((value)=>{
//     console.log(value)
// })



// function isSuperset(set,subset){
//     for(const element of subset){
//         if(!set.has(element)){
//             return false;
//         }
//     }
//     return true;
// }


// function union(setA,setB){
//     const $union=new Set(setA)
//     for(const element of setB){
//          $union.add(element)
//         }
//         return $union;
    
// }

// function intersection(setA,setB){
//     const _intersection=new Set();
//     for(const e of setB){
//     if(setA.has(e)){
//         _intersection.add(e)
//     }    
//     }
//     return _intersection
// }



// function symmetricDifference(setA,setB){
//     const _difference=new Set(setA);
//     for(const elem of setB){
//         if(_difference.has(elem)){
//             _difference.delete(elem);
//         }
//         else{
//             _difference.add(elem)
//         }
//     }
//     return _difference
// }



// function difference(setA,setB){
//     const _difference=new Set(setA)
//     console.log(_difference)
//     for(const eleme of setB){
//         if(_difference.has(eleme)){
//             _difference.delete(eleme)
//         }
//     }
//     return _difference
// }
// const setA=new Set([1,2,3,4]);
// const setB=new Set([4,8]);
// console.log(difference(setA,setB));
const myArr=['value1','value2','value3'];
const mySet=new Set(myArr);
// console.log([...mySet])
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

// console.log([...new Set(numbers)]);




// console.log(new Set("firefox"));


// let val='a';


// Question1 
// function wordCountGenerator(str,word){
//     let wordOcurrence=0;
//     let words=str.split('');

//     words.map((e)=>{
//         if(word === e){
//             wordOcurrence++
        
//         }
        
//     });
//     return wordOcurrence
// }

// let largeStr="GeeksforGeeks A computer science portal for geeks";
// let word='portal'
// console.log(wordCountGenerator(largeStr,word))


// questions 2 
// function removeDuplicateElement(myarr){
//     let newArr=new Set(myarr);
//     return Array.from(newArr)
// }
// const myarr=[12,3,2,44,13,42,4,4,4,2,3,4];
// console.log(removeDuplicateElement(myarr))

// questions 3
// function swapValues(x,y){
//     [x,y]=[y,x];
//     return [x,y];
// }
// const swap=swapValues(5,10)
// console.log(swap)

// questions 4
// You are building a program that takes an array of numbers as input and you need to extract the first, second,
// and last elements of the array. You decide to write a function that can accomplish this task using destructuring
// assignment with an array. The function should take the array as an argument, destructure it into three variables
// representing the first, second, and last elements, and then return an array with these three values. For example,
// if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

function extractElements(arr){
    let [a,b,...rest]=arr;
    let last=rest.pop()
    
    return [a,b,last]
}
let arr=[1,2,3,4,5]
console.log(extractElements(arr))

let val=[20,8,0,10,24,56];


