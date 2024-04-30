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

for (let i = 0; i < 4; i++) {
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
};

contrast.addEventListener("click", invertNav);
