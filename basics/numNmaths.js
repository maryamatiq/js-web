const score=89
// console.log(score);

const balance=new Number(100.68)
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(6));
//control digits after point
// console.log(balance.toPrecision(4));
//give precise value
// console.log(balance.valueOf());

const value=1000000
// console.log(value.toLocaleString('en-IN'))

//++++++++++++ Maths ++++++++++++++
 console.log(Math)
// console.log(Math.abs(-9));
// console.log(Math.round(4.34));
// console.log(Math.sqrt(8));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(8.45));
// console.log(Math.max(3,7,2,0));
// console.log(Math.min(3,7,2,0));

//console.log((Math.random()*10 )+ 1);//to generate random values from 1 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1)+min))
//the formula to  generate random number in a range from min to max