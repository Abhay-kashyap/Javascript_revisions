// const arr=[1,2,3,4,5]

// function double(x){
//     return x *2
// }
// function triple(x){
//     return x*3
// }
// function binary(x){
//     return x.toString(2)
// }
// const output=arr.map((x)=>x.toString(2)
// );
// console.log(output);



/***filter */
// const arr=[5,3,2,1,6];
// function isOdd(x){
//     return x%2;
// }
// function isEven(x){
//     return x>4;
// }

// const output=arr.filter((x)=>x<3)
// console.log(output)



/*** reduce*/
const arr=[1,12,20,3,4,5]
// function findSum(){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum +=arr[i]
//     }
//     return sum
// }
// const output=findSum(arr)
// console.log(output)


function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
             max =arr[i]
        }
    }
    return max
}
// const output=arr.reduce((acc,curr)=>{
// acc=acc+curr
// return acc;
// },0);
// console.log(findMax(arr))
// const output=arr.reduce((acc,curr)=>{
// if(acc<curr){
//     acc=curr
// }
// return acc
// },0)
// console.log(output)


const users=[
    {firstName:'Rohit',lastname:'Sharma',age:36},
    {firstName:'Virat',lastname:'Kholi',age:36},
    {firstName:'Ravindra',lastname:'Jadeja',age:29},
    {firstName:'Jasprit',lastname:'Bumrah',age:30},
]

// find full name
// const output=users.map((x)=>x.firstName + " " + x.lastname)
// console.log(output)
// const output=users.reduce((acc,curr)=>{
// if(acc[curr.age]){
// acc[curr.age]=++acc[curr.age]
// }
// else{
//     acc[curr.age]=1
// }
// return acc
// },{})
// console.log(output)
// const output=users.filter((x)=>{
//     return x.age >30
// }).map((x)=>x.firstName)
// console.log(output)

// using reduce
// const output=users.reduce((acc,curr)=>{
//     if(curr.age>30){
//       acc.push(curr.firstName)
//     }
//     return acc
// },[])
// console.log(output)
