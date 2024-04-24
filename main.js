
// Nawigacja

const schoolBlock = document.querySelector('.schoolBlock')
const navItemHover = document.querySelector('.nav-item-hover')
const navArrow = document.querySelector('.nav-img')

const eduOffer = document.querySelector('.edu-offer')
const navArrow2 = document.querySelector('.arrow')
const offer = document.querySelector('.offer')
const profile1Click = document.querySelector('.profile1Clicker')
const profile2Click = document.querySelector('.profile2Clicker')
const profile3Click = document.querySelector('.profile3Clicker')
const profile1 = document.querySelector('.profiles1')
const profile2 = document.querySelector('.profiles2')
const profile3 = document.querySelector('.profiles3')
const arr4 = document.querySelector('.arr4')
const arr5 = document.querySelector('.arr5')
const arr6 = document.querySelector('.arr6')
const profiles = document.querySelector('.profiles')
const socials = document.querySelector('.socials')

const shadow = document.querySelector('.shadowMobile')


const destroy = document.querySelectorAll('.destroy')

const navSlider = () => {
    navArrow.classList.toggle('arrowRotate')
    schoolBlock.classList.toggle('hidden')
    eduOffer.classList.add('hidden')
    navArrow2.classList.remove('arrowRotate')

}

const offerSlider = () => {
    navArrow2.classList.toggle('arrowRotate')
    eduOffer.classList.toggle('hidden')
    schoolBlock.classList.add('hidden')
    navArrow.classList.remove('arrowRotate')
}

navItemHover.addEventListener('click',navSlider)
offer.addEventListener('click', offerSlider)

// Nawigacja na telefon

const mobileOffer = document.querySelector('.mb-1')
const acc1 = document.querySelector('.acc1')
const arr1 = document.querySelector('.arr1')
const arr2 = document.querySelector('.arr2')
const mobileNav = document.querySelector('.mobile-nav')


const organization = document.querySelector('.mb-2')
const acc2 = document.querySelector('.acc2')

const accarr1 = () => {
    acc1.classList.toggle('height1')
    arr1.classList.toggle('arrowRotate')
    acc2.classList.remove('height2')
    arr2.classList.remove('arrowRotate')
    acc3.classList.remove('height3')
    arr3.classList.remove('arrowRotate')
    acc3.classList.remove('none')
  

}

const accarr2 = () => {
    acc2.classList.toggle('height2')
    arr2.classList.toggle('arrowRotate')
    acc1.classList.remove('height1')
    arr1.classList.remove('arrowRotate')
    acc3.classList.remove('height3')
    arr3.classList.remove('arrowRotate')

    for (let i = 0; i < 13; i++){
        if (i == 5){
            i = 6;
            destroy[i].classList.toggle('none')
        } else{
            destroy[i].classList.toggle('none')
        }
       
    }
    profile1.classList.toggle('none')
    profile2.classList.toggle('none')
    profile3.classList.toggle('none')
}

const acc3 = document.querySelector('.acc3')
const arr3 = document.querySelector('.arr3')

const accarr3 = () => {
    acc3.classList.toggle('height3')
    arr3.classList.toggle('arrowRotate')

    acc1.classList.remove('height1')
    arr1.classList.remove('arrowRotate')    
    acc2.classList.remove('height2')
    arr2.classList.remove('arrowRotate')

    for (let i = 0; i < 9; i++){
        destroy[i].classList.toggle('none')
       
    }
    profile1.classList.toggle('none')
    profile2.classList.toggle('none')
    profile3.classList.toggle('none')
}

const mobileClose = document.querySelector('.mobile-nav-close-img')


const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerHeader = document.querySelector('.hamburger-header')

const closeMobileNav = () => {
    mobileNav.classList.toggle('mobile-close')
    mobileNav.classList.remove('mobile-open')
    hamburger.classList.remove('none')
    hamburgerHeader.classList.remove('hamburger-text')
    
    shadow.classList.add('mobile-close')
    
}
const shadowClose = () =>{
    mobileNav.classList.toggle('mobile-close')
    mobileNav.classList.remove('mobile-open')
    hamburger.classList.remove('none')
    hamburgerHeader.classList.remove('hamburger-text')
    shadow.classList.add('mobile-close')
}


const hamburgerOpen = () => {
    mobileNav.classList.toggle('mobile-open')
    mobileNav.classList.remove('mobile-close')
    hamburger.classList.add('none')
    hamburgerHeader.classList.add('hamburger-text')


    
    shadow.classList.remove('mobile-close')
}




const profile1Accordion = () => {
    acc1.classList.toggle('height4')
    profile1.classList.toggle('overflow')
    profile2.classList.toggle('none')
    profile3.classList.toggle('none')
    arr4.classList.toggle('arrowRotate')
    socials.classList.toggle('none')


    
    
}

const profile2Accordion = () => {
    acc1.classList.toggle('height4')
    profile2.classList.toggle('overflow')
    profile1.classList.toggle('none')
    profile3.classList.toggle('none')
    arr5.classList.toggle('arrowRotate')
    socials.classList.toggle('none')
   

}

const profile3Accordion = () => {
    acc1.classList.toggle('height2')
    profile3.classList.toggle('overflow')
    profile2.classList.toggle('none')
    profile1.classList.toggle('none')
    arr6.classList.toggle('arrowRotate')
    socials.classList.toggle('none')

    
   
}

const profilesClose = () =>{
    acc1.classList.remove('height4')
    acc1.classList.remove('height2')

    profile1.classList.add('overflow')
    profile1.classList.remove('none')

    profile2.classList.add('overflow')
    profile2.classList.remove('none')


    profile3.classList.add('overflow')
    profile3.classList.remove('none')


    arr4.classList.remove('arrowRotate')
    arr5.classList.remove('arrowRotate')
    arr6.classList.remove('arrowRotate')

    socials.classList.remove('none')

    
    for (let i = 0; i <= 12; i++){
        if (i == 3){
            i = 4;
            destroy[i].classList.toggle('none')
        } else{
            destroy[i].classList.toggle('none')
        }
       
    }
   
    
}


shadow.addEventListener('click', shadowClose)

mobileOffer.addEventListener('click', profilesClose)

mobileClose.addEventListener('click', closeMobileNav)


hamburger.addEventListener('click', hamburgerOpen)

mobileOffer.addEventListener('click', accarr1)

acc2.addEventListener('click', accarr2)

acc3.addEventListener('click', accarr3)

profile1Click.addEventListener('click', profile1Accordion)

profile2Click.addEventListener('click', profile2Accordion)

profile3Click.addEventListener('click', profile3Accordion)

