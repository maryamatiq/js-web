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
//myname()

//Functions 
function shoppingcart(val1,...item){
    return item;
}
//Rest operator(...) is used to gather or return all parameters(values)
//console.log(shoppingcart("book","frok","grinder"));

//functions with object
const product={
    type:"electronics",
    price:30000,
    name:"Grinder"
}
function add_to_cart(thing){
    console.log(`You bought ${thing.name} of ${thing.price} rupees`);
}

//add_to_cart(product);

//function with Array
const paymentmethod=["creditcard","cashondelivery","paypal"]
function how_you_pay(pay){
    return pay[2];

}
console.log("I'll pay by ",how_you_pay(paymentmethod));