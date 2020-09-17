const User = require("./class_private_props");

class SubAdmin extends User {
  constructor(name, lname, email, role) {
    super(name, lname, email);
    this.role = role;
  }

  // Overriding getInfo()
  getInfo() {
    return { ...super.getInfo(), role: this.role };
  }
}

const sa = new SubAdmin("Sam", "Sane", "sam@same.com", 2);
sa.enrollCourse("Python")

console.log(sa.getInfo());
console.log(sa.getCourseList());
