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

const displayWords = function (arr, container, needDot) {
  arr.forEach((word) => {
    container.insertAdjacentHTML("beforeend", renderWord(word));
    let dotContainer = container.nextElementSibling;

    if (needDot === true) {
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
// href="search.html"

const renderLetters = function (letter) {
  return `<a class="letter">${letter}</a>`;
};

const displayLetters = function (arr, container) {
  arr.forEach((letter) => {
    container.insertAdjacentHTML("beforeend", renderLetters(letter));
  });
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.classList.contains("underline")) {
      e.target.classList.remove("underline");
    } else if (e.target.tagName === "A") {
      container.childNodes.forEach((letter) => {
        letter.classList.remove("underline");
      });
      e.target.classList.add("underline");
    }
  });
};

// ************* DARK/LIGHT THEME *************

const toggleDarkTheme = function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// ************* SLIDE *************

const slide = function (container) {
  let sliderInner = container;

  let pressed = false;
  let pageX;
  let startX;
  let x;
  let scrollLeft;

  sliderInner.addEventListener("mousedown", (e) => {
    pressed = true;
    pageX = e.pageX;
    startX = pageX - sliderInner.offsetLeft;
    scrollLeft = sliderInner.scrollLeft;
    sliderInner.style.cursor = "grabbing";
  });

  sliderInner.addEventListener("mouseenter", () => {
    sliderInner.style.cursor = "grab";
  });

  sliderInner.addEventListener("mouseup", () => {
    pressed = false;
    sliderInner.style.cursor = "grab";
  });

  sliderInner.addEventListener("mouseleave", () => {
    pressed = false;
  });

  sliderInner.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.pageX - sliderInner.offsetLeft;
    const moved = x - startX;
    sliderInner.scrollLeft = scrollLeft - moved;
  });
};

// ************* CHANGE PAGE *************

const changeUrl = function (container) {
  let isLetterSelected = false;
  container.childNodes.forEach((child) => {
    if (child.classList.contains("underline")) {
      isLetterSelected = true;
    }
  });
  if (isLetterSelected) {
    const newUrl = window.location.origin + "/search.html";
    window.location = newUrl;
  }
};

// ************* EXPORTS *************

export {
  renderWord,
  displayWords,
  addHidden,
  removeHidden,
  renderLetters,
  displayLetters,
  toggleDarkTheme,
  slide,
  changeUrl,
};
