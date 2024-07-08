
/**** creating arrays various ways */


// 1 using Array Constructor
// let fruits=new Array("apple ","orange" ,"banana");
// console.log(fruits[2])

// using array literals 
// let fruits=['apple ' ,'orange' ,'banana'];
// console.log(fruits)


//  we can also create an empty array
// let arr=[]
// console.log(typeof (arr))

/*** Accessing Elements:Array elements are accessed using zero-based indices */
// let fruits =['apple', 'orange' ,'banana',1];
// console.log(fruits[3])

// modifiying arrays

let fruits =['apple','mango','grapes' ,'orange','banana'];
// fruits[2]='mango';
// console.log(fruits)


// iterating arrays using that loops for of ,for in and for each also map 
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

/*** for of loops using */
// for (let item of fruits){
//     console.log(item)
// }
/*** for in loops gives index */
// for (let item in fruits){
// console.log(item)
// }

/**** for in loops */
// fruits.map((e,i,a)=>{
//     console.log(`${a}`)
// })

/**** for each loops */
// const myforLoop=fruits.forEach((e,i,a)=>{
    // return `${e} ${i}`
    // })
    
// because for each loop does not return any array its gives undefined
// console.log(myforLoop);

// map method gives return new array not modify original arr
// const myMapArr=fruits.map((e,i,a)=>{

//     return ` my fav fruit ${e} ${i}`
// });
// console.log(myMapArr)
// console.log(fruits);


// practice questions
/**   wap to mulitply each element with 2 */
// const numbers=[1,2,3,4,5];
// numbers.forEach((currentEle)=>{
//     // perform action each elements using for each
//     console.log(` ${(currentEle * 2)}`)
// })
// const newArr=numbers.map((currentEle)=>{
//    return `${(currentEle * 2)}`
// //    creates a new array with transformed element
// })
// console.log(newArr)
/*** chaining */
//for each :"it doesn't return any value".sot it cannot be directly chained with array methods.

// map: since it returns a new array ,you can chain other array methods,after using map
//push method gives arr new length
// console.log(fruits.push('gauva'))
// console.log(fruits)
//give delete elements
// console.log(fruits.pop())
// console.log(fruits);
// console.log(fruits.unshift('gauva'))
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)

// console.log(fruits.splice(2,2,"gauva"))
// console.log(fruits)
// console.log(fruits.splice(fruits.length,0,"grapes"))
// console.log(fruits)


/*** using splice that helps in replace and remove elements */
// const months=['jan ' ,'feb' ,'mar ' ,'apr',  'july'];
// // months.splice(1,0,'dec');
// console.log(months.splice(4,1,'may'))
// console.log(months);
// // const animals=['ant','bison','camel','duck','elephant'];
// // // console.log(animals.splice(2))
// // console.log(animals.splice(2,4,'g'))
// // console.log(animals)
// const myFish=new Array('angel' ,'clown' ,'mandrain')
// // const remove=myFish.splice(2,0,'drum')
// myFish.splice(2,-1,'drum','guitar')
// console.log(myFish);
// myFish.splice(0,0,'angel');
// console.log(myFish)
// myFish.splice(6,0,'stagreon')
// console.log(myFish)

// const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// const remove=myFish.splice(2);
// console.log(remove);
// console.log(myFish)
// const arr=[1, , 3,4 , ,6];
// console.log(arr.splice(1,4))
// console.log(arr)
// let text='hello world ,welcome to the universe';
// console.log(text.indexOf('welcome'))


/*** search and filter in an array */
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

// console.log(beasts.indexOf('bison',2))
// console.log(beasts.indexOf('graffie'))
// const indices=[];
// const arr=['a','b','a','c','d','a','e'];
// const ele='a'
// let idx=arr.indexOf(ele)
// while(idx!==-1){
//     indices.push(idx);
//     idx=arr.indexOf(ele, idx + 1);

// }
// console.log(indices)

// const numbers=[1,2,3,6,5,7,8,6,9,10,4];
// // indexOf(searchElement,fromindex)
// let index=numbers.indexOf(4);
// console.log(index)
// let lastIndex=numbers.lastIndexOf(6)
// console.log(lastIndex)
// const num=[1,2,3,4,5,6,7,8,9,71];
// const result=num.includes(71,10);
// console.log(result)
// // const add=months.push('dec')
// // console.log(add)
const months=['jan','feb','mar','apr','may','june','july'];
// months.splice(months.length,0,'dec')

// console.log(months.splice(2,1,'Mar'));
// console.log(months)

// const indexToUpdate=months.indexOf('mar');
// months.splice(indexToUpdate,1,"Mar")
// // console.log(months)
// const indexToDelete=months.indexOf('june');
// months.splice(indexToDelete,1)
// console.log(months)


/* fiter in array */

// const number=[1,2,3,4,5,6,4,7,6,8];
// const result=number.find((e)=>e>=8);
// let idx=number.indexOf(result)
// console.log(result)
// console.log(idx)
// const inventory=[
//     {name:'apples',quantity:2},
//     {name:'cherrie',quantity:5},
//     {name:'apples',quantity:5}
// ];
// const findIndex=inventory.find((name)=> name.name ==='cherrie')
// console.log(findIndex)


// const num=[1,2,3,4,5,6,7,8];
// const result1=num.map((e)=> e*5)
// const result=result1.findIndex((curElem)=>{
//     return curElem > 2
// })
// console.log(result1)
// console.log(result)
// find  syntax findIndex its similar the map syntax but its gives value  and findIndex gives index of that value
// const result=num.find((e)=>e>2
// )
// console.log(result)


// const result=num.filter((e)=>e>4)
// console.log(result)

/***** filtering e commerce card remove element */
// let value=6;
// const numbers=[1,2,3,4,5,6,7,6,8];
// let upToDatedCard=numbers.filter((curEle)=>curEle !==value);
// console.log(upToDatedCard)

/*** filetring product by price  */
const products=[
    {name:"laptop",price:"1200"},
    {name:"Phone",price:"800"},
    {name:"Tablet",price:"300"},
    {name:"smartwatch",price:"150"}
];
// const filterArr=products.filter((e)=>{
//   return e.price <= 500
// });
// console.log(filterArr)

// find unique value in arr
// const numbers=[1,2,3,4,6,5,6,7,8]
// const uniqueValue=numbers.filter((currentEle,index,arr)=>{
//     // console.log(index)
//     // console.log(arr.indexOf(currentEle))
//     return arr.indexOf(currentEle)===index
// })
// console.log(uniqueValue)
// console.log([...new Set(numbers)]);


// how to sort and compare an array

// const fruit=['apple','orange','mango','banana','grapes','guva'];
// console.log(fruit.sort())
// const values=[1,2,5,7,8,9,4,3,2]
// const newData=values.sort()
// console.log(newData)
// compare callback function
// for asscending order
// const nums=[1,2,3,4,6,5,7,6,8,9];
// nums.sort((a,b)=> {
//     if(a>b) return 1;
//     if(b>a) return -1;
// })
// console.log(nums)
// // for descending order
// nums.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;

// })
// console.log(nums)

const nums=[1,2,34557]
let result=nums.map((currEle)=>{
    return currEle * currEle
})
console.log(result)

// const strs=['hello','YELLOW'];
// let captailStr=strs.map((currEle)=>{
//     return currEle.toLowerCase()
// })
// console.log(captailStr)
const numbers=[1,2,3,4,5,8,40,13,46,75];
// let evenNumber=numbers.filter((currEle)=>currEle %2 ===0).map((currEle)=>{
//     return currEle*currEle
// })
// console.log(evenNumber)
let results=numbers.map((currEle)=>{
if(currEle%2===0){
    return currEle *currEle
}
}).filter((currEle)=>currEle !==undefined)
console.log(results);

const names=['ajeet','ayush','shiva','ankit'];
let addPrefixedMr=names.map((currEle)=>{
    return `${'Mr ' + currEle}`
})
console.log(addPrefixedMr)
const prices=[100,200,300,400,500];
let totalPrice=prices.reduce((a,c)=>{
    return a + c;
},0);
console.log(totalPrice)
