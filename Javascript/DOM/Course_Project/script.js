const courses = [
  {
    name: "Complete ReactJS Course",
    price: "199",
  },
  {
    name: "Complete Angular Course",
    price: "399",
  },
  {
    name: "Complete JavaScript Course",
    price: "0",
  },
  {
    name: "Complete VueJS Course",
    price: "149",
  },
];

const buttonGreen = document.querySelector(".sort-btn");
const buttonBlue = document.querySelector(".sort-btn-2");

const generateList = () => {
  const ul = document.querySelector(".list-group");

  courses.forEach((course) => {
    
    // List Item
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // Course Name
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    // Span
    const span = document.createElement("span");
    span.classList.add("float-right");

    // Price
    const price = document.createTextNode("₹" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
};

buttonGreen.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    generateList();
});

buttonBlue.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    generateList();
});

window.addEventListener("load", generateList);
