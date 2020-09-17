class User {
  #courseList = [];

  constructor(name, lname, email) {
    this.name = name;
    this.lname = lname;
    this.email = email;
  }

  getInfo() {
    return { name: this.name, lname: this.lname, email: this.email };
  }

  enrollCourse(name) {
    this.#courseList.push(name);
  }

  getCourseList() {
    return this.#courseList;
  }
}

module.exports = User;

const u1 = new User("John", "Doe", "john@gmail.com");
u1.enrollCourse("JavaScript");
u1.enrollCourse("MERN");

console.log("----------------------------------------");
console.log(u1.getInfo());
console.log(u1.courseList); // undefined
console.log(u1.getCourseList());
console.log("----------------------------------------");
