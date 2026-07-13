const num=[1,2,3]
// const arr=num.reduce(function(acc,currval){
//     console.log(`acc is ${acc} and current value is ${currval}`);
    
// return acc+currval
// },0)
// console.log(arr);
//used to calculate total bills etc

const arr=num.reduce((acc,curval)=>acc+curval,0)
console.log(arr);
