const score = 480;
// console.log(score);
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.6768;
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString());


//+++++++++++++++++++++++++++++++MATHS++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));//round-offs
// console.log(Math.ceil(5.6));// ans = 6    //takes the next integer value
// console.log(Math.floor(5.6));// ans = 5   //takes the previous integer value
// console.log(Math.sqrt(10).toPrecision(4)); //ans = 3.162

console.log((Math.random()*10) + 1);//to get random values between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);

//if we need random values within some specific range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
