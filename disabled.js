const disabled = document.querySelector(".disabled-use");
const disabledBlock = document.querySelector(".disabled-block");
const disabledX = document.querySelector(".disabledX");
const noClose = document.querySelectorAll(".noClose");
const layout = document.querySelector(".layout");
const wrapper = document.querySelectorAll(".wrapper");

const wrapperRemover = () => {
  for (let i = 0; i < 3; i++) {
    wrapper[i].classList.toggle("wrapper");
  }
};
layout.addEventListener("click", wrapperRemover);

const disabledOpen = () => {
  disabled.classList.toggle("disabled-close");
  disabled.classList.toggle("disabled-open");

  navArrow.classList.remove("arrowRotate");
  schoolBlock.classList.add("hidden");
  eduOffer.classList.add("hidden");
  navArrow2.classList.remove("arrowRotate");
};

const disabledNoClose = () => {
  disabled.classList.remove("disabled-open");
  disabled.classList.add("disabled-close");
};

disabledBlock.addEventListener("click", disabledOpen);

for (let i = 0; i < 4; i++) {
  noClose[i].addEventListener("click", disabledNoClose);
}

const nav = document.querySelector(".nav");
const blockHeader = document.querySelector(".blockHeader");
const headerFlex = document.querySelector(".headerFlex");
const buttons = document.querySelector(".buttons");
const footer = document.querySelector(".footer");
const credits = document.querySelector(".credits");
const article = document.querySelector("article");
const header = document.querySelector("header");
const contrast = document.querySelector(".contrast");

const invertNav = () => {
  nav.classList.toggle("navBlack");
  schoolBlock.classList.toggle("navBlack");
  eduOffer.classList.toggle("navBlack");
  mobileNav.classList.toggle("navBlack");
  blockHeader.classList.toggle("headerBlack");
  header.classList.toggle("headerBlack");
  buttons.classList.toggle("blackButtons");
  footer.classList.toggle("blackFooter");
  credits.classList.toggle("blackCredits");
  disabled.classList.toggle("blackDisabled");
  disabledBlock.classList.toggle("blackDisabled");
  article.classList.toggle("blackArticle");
};

contrast.addEventListener("click", invertNav);

const newHtml = document.querySelector("html");
const fontPlus = document.querySelector(".fontPlus");
const fontMinus = document.querySelector(".fontMinus");
const reset = document.querySelector(".reset");

const fontSizePlus = () => {
  //   newHtml.style.fontSize = "80%";
  var wielkosc = parseInt(
    window.getComputedStyle(newHtml, null).getPropertyValue("font-size")
  );
  if (wielkosc > 12) {
    wielkosc = 12;
    newHtml.style.fontSize = wielkosc + 1 + "px";
  } else {
    newHtml.style.fontSize = wielkosc + 1 + "px";
  }
};

const fontSizeMinus = () => {
  var wielkosc = parseInt(
    window.getComputedStyle(newHtml, null).getPropertyValue("font-size")
  );
  if (wielkosc < 8) {
    wielkosc = 8;
    newHtml.style.fontSize = wielkosc + -1 + "px";
  } else {
    newHtml.style.fontSize = wielkosc + -1 + "px";
  }
};

const resetAll = () => {
  nav.classList.remove("navBlack");
  schoolBlock.classList.remove("navBlack");
  eduOffer.classList.remove("navBlack");
  mobileNav.classList.remove("navBlack");
  blockHeader.classList.remove("headerBlack");
  buttons.classList.remove("blackButtons");
  footer.classList.remove("blackFooter");
  credits.classList.remove("blackCredits");
  disabled.classList.remove("blackDisabled");
  article.classList.remove("blackArticle");
  header.classList.remove("headerBlack");
  disabledBlock.classList.remove("blackDisabled");
  newHtml.style.fontSize = "62.5%";
  for (let i = 0; i < 3; i++) {
    wrapper[i].classList.add("wrapper");
  }
};

const closeDisabled = () => {
  disabled.classList.add("disabled-close");
  disabled.classList.remove("disabled-open");
};

nav.addEventListener("click", closeDisabled);
headerFlex.addEventListener("click", closeDisabled);
buttons.addEventListener("click", closeDisabled);
footer.addEventListener("click", closeDisabled);
credits.addEventListener("click", closeDisabled);
article.addEventListener("click", closeDisabled);

fontPlus.addEventListener("click", fontSizePlus);

fontMinus.addEventListener("click", fontSizeMinus);

reset.addEventListener("click", resetAll);
