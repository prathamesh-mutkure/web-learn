
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keydown", function () {
    if (!started) {
        $("#level-title").text("Level " + level);

        started = true;
        nextSequence();
    }
});

$(".btn").on("click", function (event) {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {

    userClickedPattern = [];
    ++level;
    $("#level-title").text("Level " + level);

    var randNum = Math.floor(Math.random() * 4);
    var randCol = buttonColors[randNum];
    gamePattern.push(randCol);

    $("#" + randCol).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randCol);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
