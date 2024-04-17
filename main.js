const schoolBlock = document.querySelector('.schoolBlock')
const navItemHover = document.querySelector('.nav-item-hover')
const navArrow = document.querySelector('.nav-img')

const eduOffer = document.querySelector('.edu-offer')
const navArrow2 = document.querySelector('.arrow')
const offer = document.querySelector('.offer')

const navSlider = () => {
    navArrow.classList.toggle('arrowRotate')
    schoolBlock.classList.toggle('hidden')
    eduOffer.classList.add('hidden')

}

const offerSlider = () => {
    navArrow2.classList.toggle('arrowRotate')
    eduOffer.classList.toggle('hidden')
    schoolBlock.classList.add('hidden')
}

navItemHover.addEventListener('click',navSlider)
offer.addEventListener('click', offerSlider)