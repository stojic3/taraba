// **************** CARDS DISPLAY ****************

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

const displayWords = function (arr, container, boolean) {
  arr.forEach((word) => {
    container.insertAdjacentHTML("beforeend", renderWord(word));
    let dotContainer = container.nextElementSibling;
    if (boolean === true) {
      dotContainer.insertAdjacentHTML("beforeend", '<div class="dot"></div>');
      const dots = document.querySelectorAll(".dot");
      dots[0].style.background = "#ff7800";
    }
  });
};

// **************** DROP MENU ****************

const addHidden = function (container) {
  container.classList.add("hidden");
};

const removeHidden = function (container) {
  container.classList.remove("hidden");
};

// ************* LETTER LINKS RENDERING *************

const renderLetters = function (letter) {
  return `<a href="search.html" class="letter">${letter}</a>`;
};

const displayLetters = function (arr, container) {
  arr.forEach((letter) => {
    container.insertAdjacentHTML("beforeend", renderLetters(letter));
  });
};

export {
  renderWord,
  displayWords,
  addHidden,
  removeHidden,
  renderLetters,
  displayLetters,
};
