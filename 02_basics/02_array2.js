const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

marvel_heros.push(dc_heros);//push returns original array but editted version
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const newArr = marvel_heros.concat(dc_heros);//concat returns a new array
// console.log(newArr);

const all_heros = [...marvel_heros, ...dc_heros];//spreading array
// console.log(all_heros);

const another_array = [1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("devkaran"));
console.log(Array.from("devkaran"));//to convert into array
console.log(Array.from({name: "devkaran"}));//interesting

//CONVERT MULTIPLE VARIABLES TO ARRAY
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));