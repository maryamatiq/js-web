//console.log("Maryam");
//simple Function
function myname(){
    //console.log("Maryam");
}
//myname();

//Function with parameters
// function addTwoNumbers(a,b){
//     console.log(a+b);
    
// }
// Using return statement
// function addTwoNumbers(a,b){
//     const sum=a+b
//     return sum

// }


//  function addTwoNumbers(a,b){
   
//     return a+b
// }
// console.log("sum is ",addTwoNumbers(null,1));


function myname(name){
    if(!name){//instead of name===undefined
        console.log("name is not defined");
        return;
    }
    
    console.log(`My name is ${name}`);
    
}
const n="maryam"
myname()
