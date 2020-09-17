const array1 = [-2, -7, 7, 2];
console.log("DEFAULT: ", array1.sort());

const mySort = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

console.log("CUSTOM1: ", array1.sort(mySort));

console.log(
  "CUSTOM2: ",
  array1.sort((a, b) => b - a)
);

/* SORTING SELECTED ELEMENTS */

const fullArray = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Tem"];
const smallArray = ["Eight", "Seven", "One", "Three"];

console.log(smallArray.sort((a, b) => fullArray.indexOf(a) - fullArray.indexOf(b)));
