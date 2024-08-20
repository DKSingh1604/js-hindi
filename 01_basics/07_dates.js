//Dates

let myDate = new Date();
// console.log(myDate.toString());//Thu Aug 15 2024 11:12:23 GMT+0530 (IST)
// console.log(myDate.toLocaleDateString());//15/8/2024
// console.log(myDate.toLocaleTimeString());//11:34:23 am
// console.log(myDate.toLocaleString());//15/8/2024, 11:15:21 am
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23, 5, 5, 45);
let myCreatedDate = new Date("04-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//returns time in ms
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth( + 1));
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "Long",
    timeZone: ''
})



