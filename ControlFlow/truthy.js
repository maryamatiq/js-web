const useremail="0"
if (useremail) {
    //console.log("got user email");
}
else{
   // console.log("Don't have user email");
}

//"Truthy values" are the one which we assume to be true 
//Except falsy values all are truthy but some surprising one's are:
// "0","false",{},[], function(){}, " "


//"Falsy values" are the one which we assume to be false
// 0,-0,false,"",null,undefined,NaN, BigInt(5n)

//To check empty object
const arr={}
if (Object.keys(arr).length===0) {
    //console.log("empty");
}


//Nullish Coalescing operator: ??
//To handle null and undefined values
let val1;
// val1=10??7
// console.log(val1);

// val1=null??7
// console.log(val1);

let val2;
val1=val2??7// val2 => undefined
//console.log(val1);

//Ternary operator
// condition?true:false
//short form of if else

const coldcoffeeprice=1000
coldcoffeeprice>600?console.log("expensive"):console.log("under budget");

