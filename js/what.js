const whatBtn = document.querySelector('.header-bottom__what');
const now = document.querySelector('.header-bottom__now');
const prev = document.querySelector('.header-bottom__previously');
const cont = document.querySelector('.header-bottom__container');
const cross = document.querySelector('.header__cross');

whatBtn.addEventListener('click', () => {
    now.classList.add ('header-bottom__now--visible'),
    prev.classList.add ('header-bottom__previously--visible'),
    cont.classList.add ('header-bottom__container--visible'),
    cross.classList.add ('header__cross--visible');

})

