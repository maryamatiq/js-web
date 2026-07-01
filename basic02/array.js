//array
const arr=[1,2,3,4,5]
//array can be string,bool,num or mix
//console.log(arr[0]);
const heros=["batman","superman","ironman"]
//another syntax
const arr2=new Array(1,2,3,4)
//console.log(arr2);

//Array methods
arr.push(6)
arr.push(1)
arr.pop()
// console.log(arr);
// arr.unshift(8)
// console.log(arr);
//insert at beg but not good bcz it take time for large data
// arr.shift()
// console.log(arr);
// console.log(arr.includes(7));
// console.log(arr.includes(3));
// console.log(arr.indexOf(5));

const newarr=arr.join()//change the type
// console.log(newarr);
// console.log(arr);
//console.log(typeof newarr);//from obj to str

//slice or splice
console.log("A",arr);
const n1=arr.slice(1,4)//range 1 - 3
console.log("C",arr);//arr does'nt change
console.log("After slice",n1);

console.log("B",arr);
const n2=arr.splice(1,4)//range 1-4
console.log("D",arr);//arr will change
console.log("After splice",n2);
