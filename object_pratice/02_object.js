// Create singleton Object
// const tinderUser=new Object();
const tinderUser={}
tinderUser['id']='123abc';
tinderUser.name='sam'
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:'somegmail.com',
    // fullName:{
        userName:{
            firstName:'hitesh',
            lastName:'Choudhary'
        }
    // }
}
// console.log(regularUser);

// how to merge two Objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3)


// get database value
const users=[
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:2,
        email:'h@gmail.com'
    },
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:3,
        email:'h@gmail.com'
    },
    {
        id:4,
        email:'h@gmail.com'
    }
]
console.log(users[1].email)
// for(let i=0;i<users.length;i++){
//     console.log(users[i].email)
// }
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const course={
    coursename:"js in hindi",
    price:'999',
    courseInstructor:"Hitesh"
}
// course.courseInstructor
const {courseInstructor:instructor, price:rs}=course
console.log(instructor,rs);
// const navbar=({company})=>{

// }
// navbar(company='hitesh')


// {
//     'name':'Hitesh',
//     'coursename':"js in hindi",
//     'price':'free'
// }


