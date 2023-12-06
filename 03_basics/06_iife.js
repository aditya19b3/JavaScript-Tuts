// Immediately Invoked Function Expressions (IIFE)

(function chai(){                           // named IIFE
    console.log(`DB connected`);
})();

// first perenthesir is for function wrap
// second parenthesis is for function execution its like we write chai()

( (name) => {                               // Simple IIFE or unnamed IIFE
    console.log(`DB connected 2 ${name}`)
})("Aditya");