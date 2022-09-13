import words from "../data/last-added-words.json" assert { type: "json" };
import freqWords from "../data/most-freq-words.json" assert { type: "json" };
import letterArr from "../data/letters-cyrillic.json" assert { type: "json" };

import {
  renderWord,
  displayWords,
  addHidden,
  removeHidden,
  renderLetters,
  displayLetters,
  toggleDarkTheme,
} from "./functions.js";

// ************* CAROUSEL *************

const cardContainerLast = document.querySelector(".lastAddedWords");
const cardContainerFreq = document.querySelector(".freqWords");

// ************* DROP MENU *************

const displayMenuBtn = document.querySelector(".btn__nav_expand");
const closeMenuBtn = document.querySelector(".remove__menu");
const dropMenu = document.querySelector(".drop-menu__container");

displayMenuBtn.addEventListener("click", function () {
  removeHidden(dropMenu);
});
closeMenuBtn.addEventListener("click", function () {
  addHidden(dropMenu);
});

// ************* HEADER SEARCH MANUALY *************

const searchBtn = document.querySelector(".btn__search");
const searchInput = document.querySelector(".search-word");

searchBtn.addEventListener("click", function () {
  if (searchInput.classList.contains("hidden")) {
    removeHidden(searchInput);
  } else {
    addHidden(searchInput);
  }
});

// ************* LETTER LINKS RENDERING *************

const letterContainer = document.querySelector(".letters");

displayLetters(letterArr, letterContainer);

// ************* DARK/LIGHT THEME *************

const btnTheme = document.querySelector(".btn__theme");
btnTheme.addEventListener("click", toggleDarkTheme);

// ************* WINDOW *************

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    toggleDarkTheme();
  }
  displayWords(freqWords, cardContainerFreq, true);
  displayWords(words, cardContainerLast, true);
  if (window.innerWidth >= 1024) {
    removeHidden(dropMenu);
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    removeHidden(dropMenu);
  } else {
    addHidden(dropMenu);
  }
});
