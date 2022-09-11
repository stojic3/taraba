import words from "./words.json" assert { type: "json" };

const cardContainers = document.querySelectorAll(".carousel__card_container");

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

const displayWords = function (arr) {
  arr.forEach((word) => {
    cardContainers.forEach((container) =>
      container.insertAdjacentHTML("beforeend", renderWord(word))
    );
  });
};

displayWords(words);

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
