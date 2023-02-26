import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    
  },

});


swiper.pagination.init();
