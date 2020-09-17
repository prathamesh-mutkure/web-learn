
/* Method Binding */

const student = {
  name: "John",
  lname: "Doe",
  roll: 10,
  getInfo: function () {
    console.log(`
        Name = ${this.name}
        Last Name = ${this.lname}
        Roll = ${this.roll}
        `);
  },
};

student.getInfo();

const teacher = {
    name: "Jane",
    lname: "Doe",
    roll: 22
};

const teacherInfo = student.getInfo.bind(teacher);
teacherInfo();
