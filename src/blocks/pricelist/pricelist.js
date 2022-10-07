import Swiper, { Pagination } from 'swiper';
// import Swiper, { Navigation, Pagination } from 'swiper';

  // configure Swiper to use modules
  // Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

  Swiper.use([Pagination]);

// import {
//   Swiper,
//   Navigation,
//   Pagination
// } from 'swiper/swiper.esm.js';


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // observer: true,
  // resizeObserver: true,

  // centeredSlides: true,
  centeredSlidesBounds: true,
  // createElements: true,
  // setWrapperSize: true,
  slidesPerView: 'auto',
  setWrapperSize: true,

  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // modules: {Pagination},

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  // breakpointsBase: window,


  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // slidesPerView: 1,
  // watchOverflow: true,
  // slidePerColumn: 1,
  // freeMode: true,
  // width: 260,
  // height: 160,
  // height: 500,
  // spaceBetween: 20,
  // centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      enabled: true,
      // width: 260,
      // spaceBetween: 20,
      // height: 200,
      // updateOnWindowResize: true;
      // centeredSlides: true,
    },
    // when window width is >= 768px
    768: {
      enabled: false,
      // width: 730,
      // centeredSlides: true,

    },
    // 1120: {
    //   enabled: false,
    // },

  }
});
