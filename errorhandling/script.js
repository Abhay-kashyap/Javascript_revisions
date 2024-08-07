let a =prompt('enter a number')
let b =prompt('enter a number')
if(isNaN(a)||isNaN(b)){
    throw SyntaxError('sorry this file not open')
}
let sum =parseInt(a)+parseInt(b);
function main(){

    try{
        console.log('The sum is ',sum*x)
        return true;
    }catch(err){
        console.log('error a gaya bhai' ,err.name);// that shows error name and err.message shows error message and err.stack which line have problem in script err.toString() all details shows
        return false;
    }
    // finally code after work return statement that reason finally block is used

    finally{
        console.log('close the connection from the database')
    }
}
let c=main()