const Product = (n, p, r) => {
  this.name = n;
  this.price = p;
  this.rating = r;
};
const p=new Product('iphone',150000,5);
console.log(p)
//the theory of this keyword  pointing to calling content is not applicable with arrow function