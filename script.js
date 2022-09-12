import words from "./data/last-added-words.json" assert { type: "json" };
import freqWords from "./data/most-freq-words.json" assert { type: "json" };
import letterArr from "./data/letters-cyrillic.json" assert { type: "json" };

// ************* CAROUSEL *************

const cardContainerLast = document.querySelector(".lastAddedWords");
const cardContainerFreq = document.querySelector(".freqWords");

const renderWord = function (word) {
  return `
            <div class="card">
              <div class="card__img_container">
                <img
                  class="card__img"
                  src=${word.img}
                  alt=""
                />
              </div>
              <div class="card__words">
                <h3 class="serbian__word">#${word.serbian}</h3>
                <h4 class="english__word">${word.english}</h4>
              </div>`;
};

const displayWords = function (arr, container) {
  arr.forEach((word) => {
    container.insertAdjacentHTML("beforeend", renderWord(word));
    let dotContainer = container.nextElementSibling;

    dotContainer.insertAdjacentHTML("beforeend", '<div class="dot"></div>');
    const dots = document.querySelectorAll(".dot");
    dots[0].style.background = "#ff7800";
  });
};

window.addEventListener("DOMContentLoaded", function () {
  displayWords(freqWords, cardContainerFreq);
  displayWords(words, cardContainerLast);
  if (screen.width >= 1024) {
    dropMenu.classList.remove("hidden");
  }
});
window.addEventListener("resize", function () {
  if (screen.width >= 1024) {
    dropMenu.classList.remove("hidden");
  } else {
    dropMenu.classList.add("hidden");
  }
});
// ************* DROP MENU *************

const displayMenu = document.querySelector(".btn__nav_expand");
const closeMenu = document.querySelector(".remove__menu");
const dropMenu = document.querySelector(".drop-menu__container");

displayMenu.addEventListener("click", () => {
  dropMenu.classList.remove("hidden");
});
closeMenu.addEventListener("click", () => {
  dropMenu.classList.add("hidden");
});

// ************* HEADER SEARCH MANUALY *************

const searchBtn = document.querySelector(".btn__search");
const searchInput = document.querySelector(".search-word");

searchBtn.addEventListener("click", function () {
  if (searchInput.classList.contains("hidden")) {
    searchInput.classList.remove("hidden");
  } else {
    searchInput.classList.add("hidden");
  }
});

// ************* LETTER LINKS RENDERING *************

// const letterArr = [
//   "а",
//   "б",
//   "в",
//   "г",
//   "д",
//   "ђ",
//   "е",
//   "ж",
//   "з",
//   "и",
//   "ј",
//   "к",
//   "л",
//   "љ",
//   "м",
//   "н",
//   "њ",
//   "о",
//   "п",
//   "р",
//   "с",
//   "т",
//   "ћ",
//   "у",
//   "ф",
//   "х",
//   "ц",
//   "џ",
//   "ш",
// ];

const letterContainer = document.querySelector(".letters");

const renderLetters = function (letter) {
  return `<a href="#" class="letter">${letter}</a>`;
};
const displayLetters = function (arr) {
  arr.forEach((letter) => {
    letterContainer.insertAdjacentHTML("beforeend", renderLetters(letter));
  });
};
displayLetters(letterArr);
