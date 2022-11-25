const morePodcasts = document.querySelector('.podcasts__more');
const podcastItem = document.querySelectorAll('.podcasts__item');

morePodcasts.addEventListener('click', () => {
   podcastItem.forEach(el => { el.classList.add('podcasts__item--visible') });
   morePodcasts.classList.add('podcasts__more--hidden');
});