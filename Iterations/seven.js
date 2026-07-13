const numbers=[1,2,3,4,5,6,7,8]
// const num=numbers.map((n)=>n+10)
// console.log(num);

//CHAINING
const num=numbers.map((n)=>n+1).map((n)=>n*2).filter((n)=>n>10)
console.log(num);
