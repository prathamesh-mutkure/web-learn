// jslint esversion:6

const fs = require('fs');
const superheroes = require('superheroes');
const supervillains = require('supervillains');

/* Logging */

console.log("Hello World!");  


/* File System Native Module */

fs.copyFileSync("file1.txt", "file2.txt");


/* External Modules */

for (let i = 0; i < 10; i++) {
    console.log(superheroes.random() + "\tVS\t" + supervillains.random());
}
