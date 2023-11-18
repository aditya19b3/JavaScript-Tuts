// console.log("A");
// console.log("D");
// console.log("I");
// console.log("T");
// console.log("Y");
// console.log("A");

function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNums(num1, num2){
    let result = num1 + num2
    return result
}


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage());

// console.log(addTwoNums(3,4));

// const result = addTwoNums(2,5)

// console.log("Result: ", result);