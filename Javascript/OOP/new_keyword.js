
/* Creating Object using Constructor with new keyword */

function User(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

const user1 = new User("John", "Doe", 22);

console.log(user1);
