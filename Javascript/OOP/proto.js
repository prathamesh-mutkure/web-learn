/* PROTOTYPE */
/* With Prototype we can add additional properties to Objects */

function User(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age; 
    this.getAge = function() {
        console.log(this.age);
    };
}

const u1 = new User("Jane", "Doe", 17);

u1.getAge();
// u1.getFullName();        DOESN'T WORK

User.prototype.getFullName = function (){
    console.log(`${this.fname} ${this.lname}`);
};

u1.getFullName();

console.log(u1);
console.log(User.prototype);
