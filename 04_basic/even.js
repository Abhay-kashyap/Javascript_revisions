// let num ='10';
// if(num%2 === 0){
//     console.log('number is even');
// }else{
//     console.log('number is odd');
// }
// let num =0;
// if(num>0){
//     console.log('number is +')
// }else if (num == 0 ){
//     console.log('num is zero')
// }else{
//     console.log('number is negative')
// }
// var day='friday';
// switch (day){
//     case 'monday':
//         console.log('today is monday');
//         break;
//     case 'friday':
//         console.log('omg let"s have party today');
//         break;
//     case 'sunday':
//         console.log('lets go to movie');
//         break;
//     default:
//         console.log('go to our work')

// }


// switch statement ques
var areaOfShapes="circle";
var a=5;
var b=10;
switch(areaOfShapes){
    case "rectangle":
        var areaOfRectangle=a*b;
        console.log(areaOfRectangle);
        break;
    case "circle":
        var pi=3.14;
        var r=2;
        var areaOfCircle=pi*(r*r);
        console.log("area of circle is :",areaOfCircle);
        break;
    case "square":
        var areaOfSquare=a*a;
        console.log('area of square is :' ,areaOfSquare);
        break;
    default:
        console.log('there is no shapes is matched')
}