
var random_num1 = Math.floor(Math.random()*6) +1;
var random_num2 = Math.floor(Math.random()*6) +1;

document.querySelector(".img1").setAttribute("src", "images/dice" + random_num1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + random_num2 + ".png");

var h1_element_text = document.querySelector("h1")

if (random_num1 === random_num2) {
    h1_element_text.textContent = "Draw!"
} else if (random_num1 > random_num2) {
    h1_element_text.textContent = "🚩 Player 1 Wins!"
} else {
    h1_element_text.textContent = "Player 2 Wins! 🚩"
}
