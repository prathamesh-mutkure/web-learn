
/* Selecting Elements */

var h1 = $("h1");
console.log(h1[0]);

/* Styling */

$("h1").css("color", "blue");

var col = $("h1").css("color");

$("h1").addClass("big-title");
$("h1").removeClass("big-title");

$("h1").addClass("big-title yellow-col");

var hasYelloClass = $("h1").hasClass("yellow-col");

$("h1").toggleClass("big-title yellow-col");

/* Manipulating Text */

$("h1").text("Hii World");

$("button").html("<em>Tap!</em>");

var h1_text = $("h1").text();

/* Attributes */

$("a").attr("target", "_blank");

console.log($("a").attr("href"))

console.log($("h1").attr("class"));

/* Event Listner */

$("button").click(function (e) { 
    $("h1").css("color", "red");
});

$(document).keydown(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple"); 
});

/* Adding and Removing Buttons */

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

$("buttom").hide();

/* Animation */

$("h1").fadeIn();
