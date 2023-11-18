const marvel_heros = ["ironMan", "Thor", "SpiderMan"]
const DC_heros = ["SuperMan", "flash", "batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(DC_heros)

// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...DC_heros]

// console.log(all_new_Heros);

const another_Array = [1, 2, 3,[ 4, 5, 6], 7, [6, 7,[ 4, 5]]]

const real_another_array = another_Array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Aditya")); 

console.log(Array.from("Aditya"));

console.log(Array.from({name: "Aditya"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));