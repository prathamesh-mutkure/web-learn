
/* Maps */
/* Maps are DS which store data in Key-Value pair */

const maps = new Map();

maps.set("NaN", "Not A Number");
maps.set("int", "Integer");
maps.set("float", "Floating Number");

console.log("-------------------------------------------");
console.log(maps);

/* Iterators */
console.log("-------------------------------------------");
console.log(maps.keys());
console.log(maps.values());
console.log(maps.entries());
console.log("-------------------------------------------");

for (const [key, value] of maps) {
    console.log(`${key} => ${value}`);
}
