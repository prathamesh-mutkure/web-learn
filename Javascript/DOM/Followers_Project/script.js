
let counter = document.querySelector(".counter");
let follower = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count <= 1000) {
        counter.innerHTML = count;
        ++count;
    }
}, 1);

setTimeout(() => {
    follower.innerHTML = "Instagram Followers";
}, 4000);
