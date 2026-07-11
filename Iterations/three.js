//for of loop
// let arr=[1,2,3,4,5]
// for (const i of arr) {
//    // console.log(i);
// }
// let country_codes=['pak','usa','uk']
// for (const code of country_codes) {
//     //console.log(code);
// }

const my_Fullname="Maryam binte Atiq"
for (const index of my_Fullname) {
    //console.log(index);
    
}

//Maps
const map=new Map()
map.set("pak","pkr")
map.set("usa","usd")
map.set("europe","euro")

//console.log(map);


// for (const [key] of map) {
//     console.log(key);
    
// }

// for (const [,value] of map) {
//     console.log(value);
    
// }
for (const [key,value] of map) {
    console.log(key,"->",value);
    
}



// /!\ OBJECT IS NOT ITERABLE
// const myobj={
//     game1:"gta6",
//     game2:"Robolox",
//     game3:"pubg"
// };
// for (const i of myobj) {
//     console.log(i);
// }