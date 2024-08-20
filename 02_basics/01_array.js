//ARRAY
//() -> parethesis
//[] -> Brackets or square brackets
//{} -> braces

const myArr = [0, 1, 2, 3, 4, 5 ,true, "devkaran"];
// console.log(myArr[7]);
const myHeros = ["Shakitman", "naagmani", "Superman", "spiderman"];

const myArr2 = new Array (1,2,3,4);
// console.log(myArr2);

//Array methods

myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);//inserts element at first position
myArr.shift();//pops element from first position

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();//binds into a string with same values

// console.log(myArr);
// console.log(newArr);

//Slice and Splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);//manipulates original array
console.log("C", myArr);
console.log(myn2);