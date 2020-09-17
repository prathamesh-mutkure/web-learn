
/* Objects Basics */

const user = {
    fname: "John",
    lname: "Doe",
    age: 22,
    email: "johndoe@gmail.com",
};

console.log(user.fname);
console.log(user.lname);
console.log(user);

user.age = 25;
console.log(user);

/* Objects with [] */

let myObj = new Object();

str = "myString";
rand = Math.random();
obj = {};
obj2 = {hii: "hello"};

myObj.type = "Dot Syntax";
myObj['date created'] = "String with space";
myObj[str] = "String Value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[obj2] = "Object 2";
myObj[''] = "Empty String";

console.log(myObj);
console.log(myObj.myString);
