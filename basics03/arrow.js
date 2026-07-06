

//"this" refers to current context
const user={
    username:"maryam",
    pass:"123",
    welcome_msg:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
    
}
//user.welcome_msg()
user.username="eman"//if we change the context
//user.welcome_msg()//then

//When we call "this" in global scope then empty braces will appear
//console.log(this);


    //console.log(this.name);
    //this will not work in functions 
    //this will work in objects though

//chai();


//ARROW FUNCTION (syntax)
const chai=()=>{
    let enduser="hehe"
    console.log(this);
    //this also will not work in this
}
//chai();


const addtwo=(n1,n2)=>{
    return n1+n2//explicit
}
//console.log(addtwo(8,7));

const addtwo2=(n1,n2)=>(n1+n2)//implicit

// console.log(addtwo2(8,7));

//Arrow function with object
const obj=()=>({usern:"maryam"})//imp to put '()'
console.log(obj());
