const name = "devkaran";
const repoCount = 50;

// console.log(name + " " + repoCount + " Value");//-> outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dev-Karan');

// console.log(gameName[2]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('a'));

// console.log(gameName.charAt(2));

//slicing
const newString = gameName.substring(0, 4);//display from 0 to 3
// console.log(newString);

const anotherString = gameName.slice(-9, 4);//can use negative values
// console.log(anotherString);

//Trim - Removes extra spaces from string
const newString1 = "      dev karan singh        ";
// console.log(newString1);
// console.log(newString1.trim());
// console.log(newString1.trimStart());

const url = "https://devkaransingh.com/dk%20singh";
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('dksingh'));//to know if something is there or not
console.log(url.includes('dk%20singh'));
