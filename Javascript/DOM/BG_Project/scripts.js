let cyan = document.querySelector(".cyan");
let red = document.querySelector(".red");
let orange = document.querySelector(".orange");
let violet = document.querySelector(".violet");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");

const getBGColor = (element) => {
  return window.getComputedStyle(element).backgroundColor;
};

const generateEventListner = (element) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = getBGColor(element);
  });
};

generateEventListner(cyan);
generateEventListner(red);
generateEventListner(orange);
generateEventListner(violet);
generateEventListner(pink);
