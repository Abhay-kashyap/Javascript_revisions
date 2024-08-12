let score=4
function one(){
    let score=0;
    console.log(score)
}
function two(){
    let score=3;
    console.log(score)
}
function three(){
    console.log(score)
}

// one()
// two()
// three()
// console.log(score)


function outerFun(){
    let outerVal=`I am at scope level 1`;
    function innerFun(){
        let innerVal=`I am at acope level 2`
        console.log(outerVal)
    }
    // console.log(innerVal);

    innerFun()
}
// outerFun()
const myGlobalValue=0;
function fun(){
    const val1=1;
    console.log(myGlobalValue);
    function innerFun(){
        const val2=2;
        console.log(val2,val1,myGlobalValue);
        function innerOFInnerFun(){
            const val3=3;
            console.log(val3,val2,val1,myGlobalValue)
        }
        // innerOFInnerFun()
    }
    //  innerFun()
}
fun()

//clousre
// function superFun(){
//     let outerValue=`i am outer`;
//     function minorFun(){
//         console.log(outerValue)
//     }
//     minorFun()
// }
//superFun()
// const errorMessage='file not found';
// setTimeout(function callback(){
// console.log(errorMessage)
// },1000)







