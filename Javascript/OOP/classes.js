class User {
  constructor(name, lname, email) {
    this.name = name;
    this.lname = lname;
    this.email = email;
  }
  getInfo() {
    return { name: this.name, lname: this.lname, email: this.email };
  }
}

let u1 = new User("A", "B", "A@B.com");

console.log(u1.getInfo());
