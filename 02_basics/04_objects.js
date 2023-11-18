// const fbUser = new Object()

const fbUser = {}
fbUser.id = "123abc"
fbUser.name = "Sam"
fbUser.isLoggedin = false


// console.log(fbUser);

const regularUser = {
    email:"some@mail.com",
    fullName: {
        userfullName:{
            firstName: "Aditya",
            lastName: "Baghel"
        }
    }
}

// console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

const users = [
    {
        id: 1,
        email: "A@mail.com"
    },
    {
        id: 1,
        email: "A@mail.com"
    },
    {
        id: 1,
        email: "A@mail.com"
    },
    {
        id: 1,
        email: "A@mail.com"
    }
]

users[1].email

console.log(fbUser);

console.log((Object.keys(fbUser)));
console.log((Object.values(fbUser)));
console.log((Object.entries(fbUser)));
console.log(fbUser.hasOwnProperty('isLoggedin'));