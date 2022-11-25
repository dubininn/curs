let tabsBtn = document.querySelectorAll('.guest__name');
let tabsItem = document.querySelectorAll('.guest__info');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('guest__name--active')});
    e.currentTarget.classList.add('guest__name--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('guest__info--visible')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guest__info--visible');
  });
});