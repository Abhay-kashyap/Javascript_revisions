class Product{
    //properties and behaviour
    // properties -> variable -> data member
    // name;
    // price ;
    // rating;

    #rating ; //private kr rha hai end user no change it

    //constructor is special type of method we calling own constructor method
    constructor(n,p,r){
        console.log('you are calling your constructor')
        this.name=n;
        this.price=p;
        this.#rating=r;
        // return 10  ; if your are returning primitive value then it will be avoided in constructor
        
        // return {x:0,y:20} // if you are return non primitive then it will be returned
    }
   static custom(){
    console.log('calling the custom methods')
   }
   get ratingGetter(){
    console.log('getter',this.#rating)
   }
   set ratingSetter(r){
    if(r<0) return 
    this.#rating=r 

   }



    // behaviour -> function -> member function
display(){
    // console.log('this object',this)
    console.log('display the current product',this.name,this.price,this.#rating)
}
}
const p =new Product('iphone' ,150000,5);//  new -> create an  empty plain object
// -> in the above piece of code we are calling the constructor  method
// p['name']='samsung s23'
// console.log(p['name']);
// p.getRating();
// p.setRating(10);
p.ratingSetter=10;
p.ratingGetter;
console.log(p);

p.display()
Product.custom();
