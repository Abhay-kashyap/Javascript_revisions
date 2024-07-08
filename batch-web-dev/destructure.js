// // let a,b,rest;
// // [a,b]=[10,20];
// // console.log(a);
let arr=[3,5,8,12,13,14];
// // let a=arr[0];
// // let b=arr[1]
// let [a, ,,,...rest]=arr;?
// console.log( a,...rest)
// let {a,b}={a:1,b:1};
// console.log(a,b)

// let arr1=[1,2,3,4];
// let obj1={...arr1};
// let n=Object(obj1)
// console.log(Object.keys(n));
// // let emp={id:101,name:'javascript'}

// let obj2={
//     name:"harry",
//     company:"tcs",
//     company_name:'xyz'
// }
// console.log({...obj2,name:"john",company:'accenture'})


// function swapValues(x,y){
// [x,y]=[y,x]
// return [x,y]
// }
// const swapped=swapValues(5,10);
// console.log(swapped)
// console.log('x' ,swapped[0],'y',swapped[1])



// let a,b ,rest;
// // [a,b]=[10,20];
// // console.log(a);
// // excepted output : 10
// // console.log(b)
// // excepted output :20;
// [a,b, , ,...rest]=[10,20,30,40,50,60];
// console.log(a,b,...rest)

// const x=[1,2,3,4,5]
// const [y,z]=x;
// console.log(y);
// console.log(z);



// similarly ,you can destructure objects on the left hand sie of the assignment
// const obj={a:1,b:1,id:101};
// const {a,b}=obj;
// console.log(a)
// let id=obj.id
// console.log(id);






// const numbers=[];
// const obj={a:1,b:101}
// let display=({a:numbers[0],b:numbers[1]}=obj);
// console.log(numbers)
// numbers[0]=obj.a;
// numbers[0]=obj.b;
// console.log(numbers)


//  default value set up in destructuring syntax
// const [a=1]=[];
// console.log(a)

// const {b=2}={b:null}
// console.log(b)
// const {c=3}={c:undefined};
// console.log(c);

// const {d=console.log('hey')}={d:undefined}
// console.log(d)

// const {a,...rest}={a:1,b:2,c:3,d:4}
// console.log(a,rest)
// const [first ,...others]=[1,2,3,4];
// console.log(others)

/************************** */
// array destructure
// const foo=['one ','two','three'];
// const [red,yellow,green,blue=4]=foo;
// console.log(red);
// console.log(yellow);
// console.log(green);
// console.log(blue)
// //object destructure:
// // const emp;
// const {id,name,s} = {
//     id:101,
//     name:'sanket singh',
//     salary:30
// };
// console.log(id,name,s);
/****************** */

// swapping variables 
// let value1=5;
// let value2=10;
// [a,b]=[value2,value1];
// console.log(a);
// console.log(b)










/******************************************************************* */

//revisions 
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.



let a,b,rest;
[a,b,...rest]=[10,20,30,40,50];
console.log(rest)



let array=[2,3,4,5];
// const [val1,val2]=array
// console.log(val1,val2) gives 1 and 2 value

// const [val1,,val3]=array;
// console.log(val1,val3)
// add default value
// const [val1='hello',val2='something']=array;
// console.log(val1,val2)
// const [val1, ,val2,...others]=array;
// console.log(val1,  val2,others);
// const [val1,val2,...{pop,push}]=array
// console.log(val1,val2,pop,push)

// let arrs=['john','smith'];
// let firstName=arrs[0];
// let LastName=arrs[1];
// console.log(firstName + LastName)
// let [firstName,secondName]=arrs;
// console.log(firstName + secondName);



let [firstName,LastName]="John Smith".split('');
console.log(firstName);

console.log(LastName);



let [f,s,l]="abd";
console.log(f,s,l)

let [one,two,three]="hello";

let users={};
[users.name,surname]="john split".split('');
console.log(users.surname);