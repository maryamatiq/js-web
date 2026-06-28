//premitive datatypes
//String,Number,Boolean,Bigint,Null,undefined,symbol
const value=Symbol('123')
const value2=Symbol('123')
console.log(typeof value);
console.log(typeof value2);
console.log(value===value2);//diff bcz Symbol creates a completely unique, one-of-a-kind value that can never be replicated


/*javaScript identifies data types using a 3-bit binary code, 3-bit binary code for a regular Object is 000
null represents a completely empty pointer, so js identify  it as an object*/

//non-premitive datatypes
//Arrays, objects, functions
const arr=["farah","atiq","amna","zainab"]
console.log(typeof arr);//type obj
const anObj={
    name:"maryam",
    age:21,
    cute:true
};
console.log(typeof anObj);
let myF=function(){
    console.log("hello world");
    
}
console.log(typeof myF);