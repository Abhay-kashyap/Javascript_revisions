let myHeros=['thor','spiderman'];
let dcHeros=['batman ','flash','superman'];
let heroPower={
    thor:"hammer",
    spiderman:"spling",
    getHeroPower:function(){
        return `${this.thor} ${this.spiderman}`;
    }
}
Object.prototype.hitesh=()=>{
    console.log('hitesh is present in all');
}
console.log(heroPower.getHeroPower())
console.log(heroPower.hitesh())

Array.prototype.heyHitesh=()=>{
    console.log('hitesh says hello')
}
console.log(myHeros.heyHitesh())
// console.log(heroPower.heyHitesh())


// inheritance 

const user={
    name:'top name',
    email:'example12@gmail.com'
}
const Teacher={
    isAvailable:true
}
const TeacheingSupport={
    isAvailable:false
}
const TAAssistant={
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:TeacheingSupport
}
Teacher.__proto__=user
console.log(Teacher.email)
console.log(TAAssistant.isAvailable);
String.prototype.turelength=function(){
    console.log(`True length is ${this.trim().length}`)
}
'anurag     '.turelength();
'rahul        '.turelength()