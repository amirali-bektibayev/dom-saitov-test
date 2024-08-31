import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 32,
    autoHeight: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoHeight: false
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 32
      },
    }
  });

  console.log('wds')