const btnSearch = document.querySelector('.header-top__search');
const scrForm = document.querySelector('.header__form-search');

btnSearch.addEventListener('click', () => {
    scrForm.classList.add('header__form-search--visible')
});

