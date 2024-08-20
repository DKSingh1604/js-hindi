//singleton
//object constructor

//Objects literals

const mySym = Symbol("key1")
const JsUser = {
    name: "devkaran",
    "full name": "dksingh",
    [mySym]: "mykey1",
    age:  234,
    location: "Chennai",
    email: "devkaran@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}
//TO ACCESS OBJECTS
// console.log(JsUser.email);//not so used way
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//can't access with dot syntax
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);//string

// Object.freeze(JsUser);//if u do not want it to change
JsUser.email = "dksingh@gmail.com";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}, how are you?`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


