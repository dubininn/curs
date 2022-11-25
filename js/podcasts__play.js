
let play = document.querySelectorAll('.podcasts__btn');
let pause = document.querySelectorAll('.podcasts__btn-pause');

play.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    play.forEach(function(btn){ btn.classList.add('podcasts__btn--hidden')});
    e.currentTarget.classList.add('podcasts__btn--active');
 
    pause.forEach(function(element){ element.classList.add('podcasts__btn-pause--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('podcasts__btn-pause--active');
  });
});