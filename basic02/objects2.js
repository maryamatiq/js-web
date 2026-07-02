//const instaUser=new Object()->(another syntax)
const instaUser={}
instaUser.id=101
instaUser.email="maryam@gmail.com"
instaUser.isloggedin=true
//console.log(instaUser);

//object within object
const fbUser={
    username:"Eman",
    fullname:{
        firstname:"Maryam",
        Middlename:"Binte",
        Lastname:"Atiq"
    },
    password:"123ab"
}
//console.log(fbUser.fullname.Lastname);

//Combining into one
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={...obj1,...obj2}//method 3->good practice
//const obj3=Object.assign({},obj1,obj2)//method 2
//const obj3={obj1,obj2}//method 1
//console.log(obj3);

//Array holding objects
const students=[
    {
        name:"maryam",
        marks:98
    },
    {
        name:"aaima",
        marks:80
    },
    {
    name:"ayesha",
    marks:90
    }

]
//console.log(students[2].marks);

//Using methods of objects
// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));//by default in array

//Another way
console.log(instaUser.hasOwnProperty('isloggedin'));






