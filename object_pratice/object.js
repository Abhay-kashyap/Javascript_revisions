// Singleton is that object create by object constructor

// object literals
const mySym=Symbol("key1")
const JsUser={
    name:'hitesh',
    "full Name":'Hitesh Choudary',
    age:18,
    [mySym]:'myKey1',
    location:'Lucknow',
    email:'hitesh@google.com',
    isLoggedIn:false,
    lastLoginDays:['monday','tuesday']
}
// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])


JsUser.email='hiteshChatgpt.com';
// Object.freeze(JsUser)
JsUser.email='hiteshmicrosoft.com';
// console.log(JsUser)

JsUser.greeting=()=>{
    console.log('hello js user')
    return 'greeting'
}
JsUser.greetingTwo=function(){
    console.log(`hello js course ${this.name}`)
}
const h=JsUser.greeting()
console.log(h)
console.log(JsUser.greetingTwo())
