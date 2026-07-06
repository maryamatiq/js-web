//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//IIFE

//simple way
function connect(){
    console.log("DB connected");
}
//connect()

//iife ---> SYNTAX
//first () is for func def & 2nd () is for execution
//bcz global scope pollute code so to avoid this we use iife
(function connect(){//named iife
    console.log("DB connected");
})();
//it is imp to put semicolon at end of iife 


(()=>{//simple iife
    console.log("DB connected two");
})();


((n)=>{
    console.log(`DB connected two ${n}`);
})(2)