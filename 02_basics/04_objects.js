//Singleton
// const tinderUser = new Object();// is a singleton object
const tinderUser = {}// not a singleton object
//above both are same

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dev",
            middlename: "Karan",
            lastname: "Singh"

        }
    }
}

// console.log(regularUser.fullname?.userfullname.lastname);
// ? -> is put to apply condition if available do it else not

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}
// TO MERGE TO OBJECTS
// const obj3 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

//MERGING USING SPREAD FUNCTION
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

//OBJECTS INSIDE ARRAY  
const users = [
    {//obj1
        email: "devkainf@gmail.com",
        id: 123
    },
    {//obj2

    }
]
// console.log(users[0].email);
// console.log(users[0].id);

// console.log(Object.keys(tinderUser));//to get all keys of tinderUser in array format
// console.log(Object.values(tinderUser));//to get all values of tinderUser in array format
// console.log(Object.entries(tinderUser));//to get all keys and corresponding values on array format

//to know if some property is the class or not
// console.log(tinderUser.hasOwnProperty('isLogged'));


//DE-STRUCTURING
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "dksingh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
//type {value to extract} = object;

// console.log(courseInstructor);
console.log(instructor);

//IN JSON ALL KEYS AND VALUES ARE IN STRING FORMAT
//JSON - JAVA SCRIPT OBJECT NOTATION
//API
{
    {},
    {},
    {}
}