const disabled = document.querySelector(".disabled-use");
const disabledBlock = document.querySelector(".disabled-block");
const disabledX = document.querySelector(".disabledX");
const noClose = document.querySelectorAll(".noClose");

const disabledOpen = () => {
  disabled.classList.toggle("disabled-close");
  disabled.classList.toggle("disabled-open");
};

const disabledNoClose = () => {
  disabled.classList.remove("disabled-open");
  disabled.classList.add("disabled-close");
};

disabledBlock.addEventListener("click", disabledOpen);

for (let i = 0; i < 3; i++) {
  noClose[i].addEventListener("click", disabledNoClose);
}

const nav = document.querySelector(".nav");
const blockHeader = document.querySelector(".blockHeader");
const buttons = document.querySelector(".buttons");
const footer = document.querySelector(".footer");
const credits = document.querySelector(".credits");

const contrast = document.querySelector(".contrastImg");

const invertNav = () => {
  nav.classList.toggle("navBlack");
  schoolBlock.classList.toggle("navBlack");
  eduOffer.classList.toggle("navBlack");
  mobileNav.classList.toggle("navBlack");
  blockHeader.classList.toggle("headerBlack");
  buttons.classList.toggle("blackButtons");
  footer.classList.toggle("blackFooter");
  credits.classList.toggle("blackCredits");
  disabled.classList.toggle("blackDisabled");
};

contrast.addEventListener("click", invertNav);

const newHtml = document.querySelector("html");
const fontPlus = document.querySelector(".fontPlus");
const fontMinus = document.querySelector(".fontMinus");
const reset = document.querySelector(".disabledImg");

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
  newHtml.style.fontSize = "62.5%";
};

fontPlus.addEventListener("click", fontSizePlus);

fontMinus.addEventListener("click", fontSizeMinus);

reset.addEventListener("click", resetAll);
