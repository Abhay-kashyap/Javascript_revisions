function product(n,p,r){
this.name=n;
this.price=p;
this.rating=r;

}
const p = new product('macbook' ,150000,5);
console.log(p);

let x={
    p:product
};
x.p('airpods',2000,5)
console.log(x)
/****
 * 1> this keyord in js diff than other languages
 * 2> this keyword refer to the context from where we called 
 * in the function constructor also 
 * -- if you return primitive it is ignored and we return the object referred by this 
 * -- if you return a custom obj ,then the custom obj is returned
 * if you don't  return anything,then object reffered by this is returned
 * 
 */
