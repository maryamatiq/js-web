//scope exist in functions, if else, loops
const d=9 // it is global scope
if (true){
    const a=1//it is local scope
    let b=2
    //a & b are just limited in this scope
    var c=3
}
//console.log(a);->no
//console.log(b );->no

//console.log(c);


var value=100//value will change if change in scope
if (true){
value=1
}
//console.log(value);


let val=100//val doesnot change if it'll change in scope
if (true){
let val=1//this value is limited to scope
//console.log("inner ",val);
}
//console.log(val);
//Global scope in code environment and in console work differently


//Nested scope
function one(){
    const username="Maryam"
    function two(){
        const website="github"
        console.log(username);
    
    }
    //console.log(website);
    //bcz website is declared inside scope so it can't be accessed outside the scope
    two();

}
//one();


//Nested scope by if else
if(true){
    const name="MARYAM"
    if(name==='MARYAM'){
        const web="Youtube"
        //console.log(name);
        
    }
    //console.log(web);
    
}
//console.log(name);

//i- SYNTAX->basic function
console.log(addone(1));//in this we can call function before declaration

function addone(one){
    return one+1
}


//ii- SYNTAX->function but also expression
//console.log(addtwo(2));->cannot access it before initialization
const addtwo=function(two){
    return two+2
}
console.log(addtwo(2))
//mini hositing
//trees where all functions and variable exist
