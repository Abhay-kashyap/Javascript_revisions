class Product{
    //properties and behaviour
    // properties -> variable -> data member
    // name;
    // price ;
    // rating;
    //constructor is special type of method we calling own constructor method
    constructor(n,p,r){
        console.log('you are calling your constructor')
        this.name=n;
        this.price=p;
        this.rating=r;
    }
    // behaviour -> function -> member function
display(){
    // console.log('this object',this)
    console.log('display the product')
}
}
const p =new Product('iphone' ,150000,5);//  new -> create an  empty plain object
// -> in the above piece of code we are calling the constructor  method
console.log(p);
p.display()