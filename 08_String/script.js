// const str = "hello,    world!"
// console.log(str.length);
// const myStr='My name is \'Abhay Kashyap \' &   I am a \" frontend developer\" ';
// console.log(myStr)


// let text ='Vinod Thapa';
// they return -1 because we search thapa but our string have Thapa is case senstive reasons shows 
// console.log(text.indexOf('thape'))
// console.log(text.indexOf("Thapa" ))
// Array.from() is a method convert string into array
// let strArr=Array.from(text)
// console.log(strArr)
// let strMap=strArr.map((curEle,index)=>`${curEle} - ${index}`);
// console.log(strMap)


// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let index =text.indexOf('Javascript');
// let index =text.lastIndexOf('Javascript',44);
// console.log(index)
// search method have functionality we use regular expressions but we have not give to us starting position of that index 
// let result=text.search(/Javascript/i);
// console.log(result)


// match() : returns an array of the matched value or null if no match is found 
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let result=text.match('JavaScript');
// console.log(result);
// todo here the js converts the normal text into regular expressions text.match(/javascript/):without the g flag
// let result=text.match(/Javascript/gi)
// console.log(result)
// let matchResult=text.matchAll("JavaScript");
// if any thing not found that shows empty arr Object [RegExp String Iterator] {}
// for(let result of matchResult){
//     console.log(result)
// }

/*** includes method  */
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// case senstive and regular expression not take
// console.log(text.includes(/Java/i))

// start with(): The startWith() method return true if a string is begins with a specified value otherwise it return false
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let begins=text.startsWith("H");
// console.log(begins)
// endsWith() :
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let result=text.endsWith('course')
// console.log(result)

// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let result=Array.from(text)
// console.log(result)
// let changeInELement =result.splice();
// console.log(result)

// slice extarcts a part of string and returns the extracted part in a new string .
// extract up to but not including last index 
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// we pass negative then this method move backwards
// let result=text.slice(1,4)
// console.log(result);
// we substring gives string start position to end postion but last index not include or we pass negative value gives whole string
// let checkSubString=text.substring(1,4);
// console.log(checkSubString)
// homeworks
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let result=text.substring(0)
// let result=text.substring(1)
// let result=text.substring(-5)
// console.log(result)



// questions
// let text="Hello JavaScript , welcome to our world best JavaScript course";
// let result=text.slice(1)
// let result=text.replace("JavaScript" ,"Vinod")
// let result=text.replaceAll("JavaScript","vinod")
// let result=text.substring(1)
// console.log(result)

// extracting String Characters


// the charAt (position) Method 
// the charCodeAt (position) Method
// The at(postion) Method
let text="Hello JavaScript , welcome to our world best JavaScript course";
//  in negative value gives empty value
// let result=text.charAt(-6);

// it gives ascii values of that chracter
// let result=text.charCodeAt(6)
// it gives also negative value result
// let result=text.at(-6)
// console.log(result)


// replace method
// const str="Hello ,World";
// let result=str.replace("World","Javascript");
// console.log(result)


const originalString="Hello , World! How are you, World?";
let replaceString=originalString.replace(/world/gi ,"javascript");
console.log(replaceString)




// other useful method 
// toUpperCase and toLowerCase ; converts the string to uppercase or lowercase.
// const str='JavaScript';
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())



// trim method removes whitespace from start and  end of the string
// const str="    Hello , World!   ";
// console.log(str.length)
// let trimStr=str.trim();
// console.log(trimStr)
// console.log(trimStr.length)

// splits the string into an array of  substrings based on a specified delimeter.
const str="apple,orange,banana";
// split method convert into 
let strArr=str.split(",").reverse().join()
console.log(strArr)
// console.log("ab".charCodeAt())
// console.log("z".charCodeAt(0))

// for(let char=65;char<=90;char++){
    
//     console.log(String.fromCharCode(char))

// }


// const checkAllVowelsPresentOrNot=(str)=>{
//     const vowels="aeiou";
//     let arr=[];
//     for(let char of vowels){
//         if(!str.includes(char)){
//             return false;
//         }
//     }
//     return true
//     }

// console.log(checkAllVowelsPresentOrNot("my name is vinod @ thapa"))

const countVowels=function (str){
    let vowels="aeiou";
    let count =0;
    for(let char of str){
        if(vowels.includes(char))
            count ++;
    }
    return count;

}
console.log(countVowels("hello a e i o u a eio uworld"));


//  self solving problems 
// const pangramCheck=function (str){
//     let totalAlpha="";
//     for(let char=97;char<=122;char++){
//         totalAlpha +=String.fromCharCode(char)
//     }
//     for(let char of totalAlpha){
//         if(!str.includes(char)){
//             return 'not pangram';
//         } 
//     }
//     return 'is panagram';
// }

const pangramCheck=(str)=>{
    let inputArr=str.toLowerCase().split('')
    // console.log(inputArr)
    const values=inputArr.filter((curEle)=>{
       return curEle.charCodeAt() >= "a".charCodeAt() && curEle.charCodeAt() <="z".charCodeAt();

    })
    console.log(values)
    // removes duplicated values
    return new Set(values).size ===26
}

console.log(pangramCheck("the five boxing wizards jump quickly"))
