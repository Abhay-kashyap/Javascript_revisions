let pattern ='pw';
let regExOne=new RegExp(pattern);
let flag ='gi'
let regExTwo=new RegExp(pattern,flag);

let regExThree=/pw/gi;
const strToCheck =" pw is growing at a  rapid speed and recently they are working on Pwskills to create skills based pwcontent";
//  we are checking to through regular expressions 
const result=regExThree.test(strToCheck);
console.log(result);
// we also check through the string
// search give only first match results

// const anotheResult =strToCheck.search(regExThree);
const anotheResult=strToCheck.match(regExThree)
console.log(anotheResult);
const oneMoreResults=strToCheck.replace(regExThree,'p-w')
console.log(oneMoreResults)


const  webUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/%420Global_Objects/String/search"
const userUrl=webUrl.replace(/%\d\d\d/gi,"- ")
console.log(userUrl)