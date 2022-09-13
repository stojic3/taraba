import letterArr from "../data/letters-cyrillic.json" assert { type: "json" };
import searchLetter from "../data/search-letter.json" assert { type: "json" };
import {
  renderWord,
  displayWords,
  addHidden,
  removeHidden,
  renderLetters,
  displayLetters,
  toggleDarkTheme,
} from "./functions.js";

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

// ************** NUMBER OF WORDS ***********************
const numOfWords = document.querySelector(".num-of__words");

numOfWords.textContent = `(${searchLetter.length})`;

// ************** WINDOW ***********************

const wordsContainer = document.querySelector(".words__container");

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    toggleDarkTheme();
  }

  displayWords(searchLetter, wordsContainer, false);
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
