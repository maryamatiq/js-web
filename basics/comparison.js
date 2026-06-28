//comparison b/w same type
console.log(3>2);
console.log(3==2);
console.log(3<2);
console.log(3>=2);
console.log(3<=2);
console.log(3!=2);

console.log("2">1);//it convert into same datatype
console.log(2>"1");
//so make rule to not compare values of diff datatypes

/* == & >,< works differently
<,> convert null into 0 while == donot
*/
console.log(null>0);
console.log(null==0);
console.log(null<=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<=0);

//=== & ==
console.log(2=="2");//it convert into same datatype
console.log(2==="2");//compare datatypes and val both

