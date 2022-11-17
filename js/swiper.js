const swiper = new Swiper('.swiper', {

  
    
    direction: 'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1025: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }


  });



  

 
  

  