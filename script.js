import words from "./last-added-words.json" assert { type: "json" };
import freqWords from "./most-freq-words.json" assert { type: "json" };

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
