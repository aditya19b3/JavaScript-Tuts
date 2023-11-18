// singleTon

// object litrals
// Object.create
const JsUser = {
    name: "Aditya",
    "Full Name": "Aditya Baghel",
    age: 20,
    location:"Noida",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue"]
}

JsUser.email = "Aditya@mail.com"
// Object.freeze(JsUser)
JsUser.email = "Aditya@gmail.com"
// console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);

JsUser.greeting = function(){
    console.log("Hello!");
}
JsUser.greeting2 = function(){
    console.log(`Hello! ${this["Full Name"]} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
