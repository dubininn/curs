const enter = document.querySelector('.header-top__enter');
const enterForm = document.querySelector('.header__modal');
const close = document.querySelector('.modal__close');

enter.addEventListener('click', () => {
    enterForm.classList.add ('header__modal--visible');
})

close.addEventListener('click', () => {
    enterForm.classList.remove ('header__modal--visible');
})
