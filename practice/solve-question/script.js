// const isReverse=setTimeout(()=>{
//     const input='hello';
//      console.log(input.split('').reverse().join(""));

// },2000);



// const input='hello world';
// function isReverseString(str){
//     return str.split('').reverse().join('');
// }

// setTimeout(()=>{
//     const reverse=isReverseString(input);
//     console.log(reverse)
// },2000);
// let delay=3000;
// let countDownInterval=1000;
// let remainingtime=delay/1000;
// const timeRemaining=setInterval(displayMessage,countDownInterval);
// function displayMessage(){
//     if(remainingtime>0){
//         console.log('time is remaining');
//         remainingtime--;
//     }
// }
// function genarateRandomNumber(){
//     clearInterval(timeRemaining)
//     console.log("genrated random number " + (Math.random() *10).toFixed(2) )
// }
// setTimeout(genarateRandomNumber,3000)
// let delay=3000;
// let countDownInterval=1000;
// let remainingtime=delay/1000;
// function displayMessage(){
//     if(remainingtime>0){
//         console.log(`time remanining :${remainingtime} second`);
//         remainingtime --
//     }
// }
// function genarateRandomNumber(){
//     clearInterval(timeRemaining);
//     let randomNumber=(Math.random() *100).toFixed(2);
//     console.log(`genrated random number :${randomNumber}`)
// }
// const timeRemaining=setInterval(displayMessage,countDownInterval);
// setTimeout(genarateRandomNumber,delay);

/**** 3 rd questions  */
// let items={
//     "apple":1 ,
//     'banna':2 
// };
// function convertIndianRupees(items){
//     const exchangeRate=80;
//     let convertedItem={};
// const prices=Object.keys(items)
// prices.map((item)=>{
//     convertedItem[item]= items[item] * exchangeRate;
// })
// return convertedItem
// }
// console.log(items)
// console.log(convertIndianRupees(items));



// let booksList=
//     [{
//         "bookaname" : "java",
//         "authorName" : "javas",
//         "published":2002
//     },
//     {
//         "bookaname" : "python",
//         "authorName" : "python by python",
//         "published":2000
//     },
//     {
//         "bookaname" : "datawarehouse",
//         "authorName" : "warehouse",
//         "published":2005

//     },
//     {
//         "bookaname" : "mobile computing",
//         "authorName" : "mobile computing by ambreen",
//         "published":2011
//     },
//     {
//         "bookaname" : "cryptography",
//         "authorName" : "cryptography by anum",
//         "published":2011
//     }
// ]
// function filterPublishedBefore2010(booksList){
//     // const filter2010=booksList;
//     let keysVal=booksList
//     keysVal.filter((curEle)=>{
//         return curEle.published < 2010
//     })
//     // return filterPublishedBefore2010
// }
// console.log(filterPublishedBefore2010())



// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.
// function validUrl(str){
//     const pattern=/(https?:\/\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=]+(\.[A-Za-z]+)+)$/
//     if(pattern.test(str)){
//         console.log(`${str} url is matched`)
//     }
//     else{
//         console.log(`${str} url is  not matched`)

//     }
// }
// validUrl("http://example..com")
// function validUrl(str) {
//     // Regex pattern for a valid URL
//     const pattern = /^(https?:\/\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=]+(\.[A-Za-z]{2,})+)$/;
    
//     // Check if the URL matches the pattern
//     if (pattern.test(str)) {
//         console.log(`${str} is a valid URL.`);
//     } else {
//         console.log(`${str} is not a valid URL.`);
//     }
// }

// // Example usage
// validUrl("http://example.com");  // valid
// validUrl("https://example.com"); // valid
// validUrl("ftp://example.com");   // invalid
// validUrl("http://example");      // invalid
// validUrl("http://example..com"); // invalid
// validUrl("https://sub.example.com"); // valid


// Example usage
function validLinkedinUrl(url){
    const pattern=/((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
    if(pattern.test(url)){
        return `${url} valid`

    }
else{
    return `${url} not valid`
}
}
const testUrl=["https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-doe_",
    "https://www.linkedin.com/in/short",
    "https://www.linkedin.com/in/thisprofileiswaytoolongtobevalidbecauseithasmorethan30characters",
    "https://www.linkedin.com/in/invalid~char",
    "http://www.linkedin.com/in/nos",
    "https://www.linkedin.com/in/johndoe123/",
    "https://www.linkedin.com/in/johndoe_",]
    testUrl.forEach(url=>console.log(`${url} ${validLinkedinUrl(url)}`));





    // objects 
let obj={id:101,name:'alas',salary:10000};
let emp=new Object()
emp.id=102;
emp.name="sam"
console.log(obj)
console.log(emp)


// function Emp(i,n,s){
//     this.id=i;
//     this.name=n;
//     this.salary=s;
// }
const e=new Object(103,'any',21000)
console.log(e)


console.log(emp.id)
console.log(emp['name'])
emp['salary']=13000;
emp.id=13;
emp['name']='mr.sam'
delete emp.id
delete emp['name']
console.log(emp)