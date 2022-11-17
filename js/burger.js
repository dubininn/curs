const burger = document.querySelector('.header-top__burger');
const burgerNav = document.querySelector('.header-top__nav');
const burgerClose = document.querySelector('.header-top__close');

burger.addEventListener('click', () => {
    burgerNav.classList.add ('header-top__nav--visible');
})

burgerClose.addEventListener('click', () => {
    burgerNav.classList.remove ('header-top__nav--visible');
})