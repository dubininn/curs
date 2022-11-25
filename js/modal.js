const enter = document.querySelector('.header-top__enter');
const enterForm = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

enter.addEventListener('click', () => {
    enterForm.classList.add ('modal--visible');
})

close.addEventListener('click', () => {
    enterForm.classList.remove ('modal--visible');
})
