
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        playAudio(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    playAudio(event.key);
    animateButton(event.key);
});

function playAudio(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            return;
    }
    audio.play();
}

function animateButton(key) {

    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 150);
}
