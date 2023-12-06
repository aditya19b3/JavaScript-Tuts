const user =  {
    username: "Aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the course`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Akhil"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Aditya"                  // this is not working inside functions
//     console.log(this.username);
// }

// chai()


// const chai = function chai(){
//     let username = "Aditya"                     // this is not working                
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Aditya"                       // this is not working     
    console.log(this.username);
}
// chai()


//arrow function syntax

// () => {}

// const addTwo = (num1, num2) => {
//     return num1+num2                             // explicit return
// }


// const addTwo = (num1, num2) => num1+num2        // another syntax    implicit return

// const addTwo = (num1, num2) => (num1+num2)      // another syntax  implicit return

const addTwo = (num1, num2) => ({username: "Aditya"})  

console.log(addTwo(3,4))


// const myArray = [ 2,4,5,6,7]

// myArray.forEach()