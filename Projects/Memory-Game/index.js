const title = document.querySelector("#title");
const cards = document.querySelectorAll(".card");

let successCount = 0;
const state = {
  isFlipped: false,
  firstCard: null,
  secondCard: null,
};

let { isFlipped, firstCard, secondCard } = state;

function flip() {
  this.classList.toggle("flip");

  if (!isFlipped) {
    firstCard = this;
    isFlipped = true;
  } else {
    secondCard = this;
    check();
  }
}

const check = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success() : failed();
};

const success = () => {
  if (firstCard !== secondCard) {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    successCount += 2;
  }
  reset();

  // if (successCount === 4) {
  //   title.textContent = "Nice Memory!";
  //   setTimeout(() => {
  //     restart();
  //   }, 1000);
  // }
};

const failed = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 200);
};

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

const shuffle = () => {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};

const restart = () => {
  title.textContent = "How is your memory";
  reset();
  successCount = 0;
  cards.forEach((card) => {
    card.classList.remove("flip");
  });
};

shuffle();
cards.forEach((card) => card.addEventListener("click", flip));
