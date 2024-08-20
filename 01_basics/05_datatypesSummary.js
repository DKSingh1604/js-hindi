//Primitive

//7 Types -> String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const bigNumber = 3436436464646n;

//Reference(Non-Primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "doga"];
let myObj = {
    name: " devkaran",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);


//********************************* */

//Stack(Primitive) -> a copy of the object is changed
//Heap(Non-Primitive) -> original reference is changed

let myYoutubename = "abcdefgh";

let anotherName = myYoutubename

anotherName
console.log(anotherName);