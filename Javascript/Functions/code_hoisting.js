// CODE HOISTING
// Javascript before executing the code hoists the Functions and Variable declaration at the top
// However, variables are just declared and initialized as undefined
// Function expressions and arrow functions are also initialized as undefined

sayHello();     // Works fine
// sayHii();    // Error

console.log(a);             // undefined
// console.log(typeof b);   // Error for let and const
console.log(typeof c);      // undefined

function sayHello() {
  console.log("Hello");
}

var sayHii = () => {
  console.log("Hii");
};

var a = "A";
let b = "A";
c = "c";
