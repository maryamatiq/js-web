//Singleton
//object.create(creating object by constructor)

const my_sym=Symbol("key1")
//object literals
let user={
    name:"Maryam",
    "full name":"MARYAM BINTE ATIQ",
    age:21,
    password:"123",
    is_logged_in:true,
    lastlogin:["mon","wed"],
    [my_sym]:"key2"//[] for proper syntax & change type to symbol
};

//Accessing
// console.log(user.name);
// console.log(user["is_logged_in"]);
// console.log(user["full name"]);
//console.log(user[my_sym])

//To make changes
// user.is_logged_in=false
// Object.freeze(user)
// user.is_logged_in=true
// console.log(user["is_logged_in"]);
// console.log(user);

user.greeting=function(){
    console.log("Hello user");
}
//console.log(user.greeting);//it gives reference
console.log(user.greeting());

user.greetingTwo=function(){
    console.log(`hello user ${this["full name"]}`);
}
console.log(user.greetingTwo());
