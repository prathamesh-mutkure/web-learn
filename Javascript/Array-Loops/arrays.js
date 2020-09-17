
// Creating Array
const greet = ["Hi", "Hello", "Namaste", "Hola"];
const nums = new Array("one", "two", "three", "four");

console.log("-----------------------------");
console.log(greet);
console.log(nums);
console.log("-----------------------------");

//Playing with end elements
nums.pop();
greet.push("Namaskar");

console.log(greet);
console.log(nums);
console.log("-----------------------------");

// Playing with front elements
greet.unshift("<3");
nums.shift();

console.log(greet);
console.log(nums);
console.log("-----------------------------");

// Size
console.log([1, 2, 3, 4, 5].length);

console.log("-----------------------------");
