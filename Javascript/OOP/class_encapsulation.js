
/* GETTERS AND SETTERS */
/* Getters and Setters can be used to access dynamically computed properties */

class Person {
  random = ["Demo"];
  set latest(val) {
    this.random.push(val);
  }
  get latest() {
    return this.random[this.random.length - 1];
  }
}

const p1 = new Person();
console.log(p1.latest);

p1.latest = "Demo2";
console.log(p1.latest);
