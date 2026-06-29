const name="maryam"
const value=21
// console.log(name+value+" years old")
//creating placeholders in string 
//new SYNTAX:
// console.log(`my name is ${name} and my age is ${value}`)

//Modern syntax of string

const Game=new String('Subway Surfers')
// console.log(Game)
// console.log(Game[0]);
// console.log(Game.charAt(2))
// console.log(Game.italics())
// console.log(Game.replace("Surfers","track"))
// console.log(Game.toUpperCase())
// console.log(Game.toLowerCase())
// console.log(Game.indexOf('f'))
// console.log(Game.includes('Surfers'))
// console.log(Game.length)
// console.log(Game.split(' '))
// console.log(Game.trim())
// console.log(Game.slice(0,8))

const newgame=Game.substring(0,7)
console.log(newgame);

//deals with -ve +ve both
const new2game=Game.slice(-1,7)
console.log(new2game);
