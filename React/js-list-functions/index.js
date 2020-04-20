
const numbers = [3, 17, 8, 34, 55, 98, 120, 11, 167, 40]

function drawLine() {console.log("-----------------------------------------------------------------")}

drawLine()
console.log('Original List: ' + numbers)
drawLine()

/***** MAP *****/
/* Do something with each item of list and return a new list */

let doubleNumbers = numbers.map(number => number * 2)

console.log('[Map] Double: ' + doubleNumbers)
drawLine()

/***** FILTER *****/
/* Return a new list of items which satisfy a condition */

let evenNumbers = numbers.filter(number => number%2 === 0)

console.log('[Filter] Even: ' + evenNumbers)
drawLine()

/***** REDUCE *****/
/* Accumalate all the elements by doing a specific operation */

let sum = numbers.reduce((accumalator, currentNum) => accumalator + currentNum)

console.log('[Reduce] Sum: ' + sum)
drawLine()

/***** FIND *****/
/* Returns the first element which satisfies a condition */

let divisibleBy5 = numbers.find(number => number%5 === 0)

console.log('[Find] Divisible by 5: ' + divisibleBy5)
drawLine()

/***** FIND INDEX *****/
/* Returns the index of first element which satisfies a condition */

let DB5Index = numbers.findIndex(number => number%5 === 0)

console.log('[Find Index] DB5: ' + DB5Index)
drawLine()
