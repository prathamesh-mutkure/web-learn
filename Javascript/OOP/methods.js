
const user = {
    fname: "John",
    lname: "Doe",
    email: "john@gmail.com",
    courseList: [],
    buyCourse: function (name) {
        this.courseList.push(name);
    },
    getCourseCount: function () {
        return `${this.fname} has bought total of ${this.courseList} courses`;
    }
};

console.log(user.courseList);

user.buyCourse("MERN");

console.log(user.courseList);
console.log(user.getCourseCount());
