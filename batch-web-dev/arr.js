const oneArray=[1,2,3,4];
const twoArray=[5,6,7,8];
// const threeArray=oneArray.concat(twoArray);
// const threeArray=[oneArray,twoArray];


//... spread operator 
const threeArray=[...oneArray,...twoArray]
// console.log( threeArray)


/******************************** */
// function manyArguments(){
//     let ars=Array.from(arguments);
//     let finalArr=ars.map(e=>e *2)
//     return finalArr
// }
// console.log(typeof manyArguments(1,2,3,4))
// console.log(manyArguments(1,2,3,4,5,6,7))

// let arr=[]
// function manyValues(...args){
//  let arrs2= args.forEach(e=>arr.push(e));
// return  arr
// }
// console.log(manyValues(1,7,8,9))


/********* */
//rest 
function manyArguments(){
    console.log(typeof arguments)
    let ars=Array.from(arguments);
    let finalArr=ars.map(e=>e )
    return finalArr;
}
console.log(typeof manyArguments(1,2,3,4))
console.log(manyArguments(1,2,3,4,5,6,7))


function manyArgumentsv2(...args){
    console.log(typeof args)
    let finalArr=args.map(e=>e);
    return finalArr
}
console.log(manyArgumentsv2(1,2,3,4))


const names=['superman','flash'];
const newNames=['batman',...names,'thor'];
console.log(newNames);
const siteNames='pwskills';
console.log([...siteNames]);


function pwskills(...values){
    return values
}
console.log(pwskills('superman','flash'))