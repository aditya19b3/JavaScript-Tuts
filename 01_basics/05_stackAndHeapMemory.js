/*
The stack is a region of memory that operates in a last-in, first-out (LIFO) manner. It's used for storing function call information, local variables, and control flow data.

Here's a simple example demonstrating the stack:
*/

function addNumbers(a, b) {
    let sum = a + b;
    return sum;
  }
  
  let result = addNumbers(5, 7);
  console.log(result);

  //In this example, when addNumbers is called, it gets added to the stack along with its parameters (a and b) and local variables (sum). Once the function completes, it is removed from the stack, and the result is stored in the variable result.


  /*
The heap is a larger, less organized region of memory used for dynamic memory allocation. Objects and variables with longer lifetimes are stored in the heap.
  */

let obj1 = { name: 'John', age: 25 };
let obj2 = obj1;
obj2.age = 30;

console.log(obj1.age); // Outputs 30

//In this example, obj1 is created in the heap, and obj2 is assigned a reference to the same object. When the age property of obj2 is changed, it affects the same object in the heap, and therefore, obj1 reflects the change as well.


/*
In summary:

Stack is used for function call management and local variables with a short lifespan.


Heap is used for dynamically allocated memory, such as objects, with a longer lifespan.
*/

  