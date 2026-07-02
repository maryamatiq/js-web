const boys=["ibrahim","yahya","yousuf"]
const girls=["aaima","maryam","husna"]
// boys.push(girls)
// console.log(boys);//original changed
// console.log(boys[3][1]);

// console.log(boys.concat(girls));
// console.log(boys);//original unchanged

//spread(another method to merge)
const spreadarr=[...boys,...girls]
//console.log(spreadarr);

const another_arr=[1,2,3,[4,5],[6,7,[8,9]]]
//console.log(another_arr.flat(Infinity));

//converting any type into array
//console.log(Array.isArray([1,2,3,4]));
// console.log(Array.from("Maryam"));
// console.log(Array.from({name:"maryam"},));

const a=1
const b=2
const c=3
console.log(Array.of(a,b,c));
