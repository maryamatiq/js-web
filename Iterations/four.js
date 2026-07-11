//for in
const obj={
    js:'javascript',
    py:'python',
    cpp:'c++',
}
for (const key in obj) {
    //console.log(`${key} full form is ${obj[key]}`);  
}
//key gives keys & obj[key] gives values

const vowels=['a','e','i','o','u']
for (const key in vowels) {
    // console.log(key);//it prints indexes
   // console.log(vowels[key]);
}

//MAP IS NOT ITERABLE IN FORIN
// const map=new Map()
// map.set("pak","pkr")
// map.set("usa","usd")
// map.set("europe","euro")
// for (const key in map) {
//   console.log(key);
  
// }
