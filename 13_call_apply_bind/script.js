let name={
    firstName:'Akshay',
    lastName:'Saini',
    printFullName:function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

name.printFullName()
//again we use prinfullname write in name2 similar type function 
let name2={
 firstName:'Sachin',
 lastName:'Tendulkar'   
}

// Function Borrowing
// name.printFullName.call(name2)
name.printFullName.call(name2)