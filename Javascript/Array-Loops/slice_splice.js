
// SLICE
// Returns section of Array
// From start to end index

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("-------------------------------");
console.log(nums.slice(1, 4));
console.log(nums.slice(5));
console.log(nums.slice(5, 3));
console.log("-------------------------------");
console.log(nums.slice(-3));
console.log(nums.slice(0, -7));
console.log(nums.slice(-3, -7));
console.log("-------------------------------");

// SPLICE
// Removes section of array
// From start index by specified number
// Can also replace them

console.log("-------------------------------");

let array = [...nums];
array.splice(2, 5);
console.log(array);

array = [...nums];
array.splice(2, 5, "X");
console.log(array);

array = [...nums];
array.splice(2, 5, "X");
console.log(array);

console.log("-------------------------------");

array = [...nums];
array.splice(-7, 5, "X");
console.log(array);

array = [...nums];
array.splice(2, -1, "X");
console.log(array);

console.log("-------------------------------");
