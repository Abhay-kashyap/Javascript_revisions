// try{
//     console.log('hello');
//     console.log(a);
//     console.log('end try')
// }catch(e){
//     console.log('error handled')
// }finally{
//     console.log('close my file')
// }
// console.log('end')


function getPerson(obj){
    try{
        if(typeof obj ==='object' && obj!==null && 'name' in obj && 'age' in obj){
            return `Name ${obj.name} and Age ${obj.age}`
        }
        throw new Error('Invalid Parameter Type')
    }catch(e){
        return e.message
    }
}
console.log(getPerson({name:'Mithun',age:20}))
console.log(getPerson({name:'Mithun'}))
console.log(getPerson(['name','mithun']))

// class car{
//     company='Skoda';
//     model='rapid'
//     year=2022;
//     getDescription() {
//         return `This is a ${this.year} ${this.company} ${this.model}`
//     }

//     }
// const myCar=new car();
// console.log(myCar.getDescription())