let age=false
let con=Number(age)
//console.log(typeof age)//type-> string
//console.log(typeof con)//type-> number
//console.log(con)//Not a Number  

// "33" => 33
// "33abc"=> NaN
// null=> 0; undefined=> NaN
// true=> 1; false=> 0

let val="maryam"
let boolVal=Boolean(val)
//console.log(typeof val)
//console.log(typeof boolVal)
//console.log(boolVal)

// 1=>true ; 0=> false
// ""=> false; "maryam"=>true

let anynum=33
let stringnum=String(anynum)
// console.log(typeof stringnum);
// console.log(stringnum)

let value=3;
let negval=-value;
//console.log(negval);
/*
console.log(2+2)//add
console.log(2-2)//sub
console.log(2*2)//product
console.log(2/2)//division
console.log(2%2)//modulus
console.log(2**2)//to take power
*/

let str1="hello"
let str2=" world"
let str3=str1+str2
//console.log(str3);

console.log(1+"2");//converted to string
console.log("1"+2);//converted to string
console.log("1"+2+2);//if 1st val is string then all converted to string
console.log(1+2+"2");
//NOT A GOOD PRACTICE SO USE BRACESorParenthesis

console.log(3+4*6/8);//not good
//the readablity should be high

console.log(+true);//tricky conversion

let x=1
let y=x++
let z=++x
console.log(y);
console.log(z);

