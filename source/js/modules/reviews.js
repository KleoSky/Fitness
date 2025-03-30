import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const initSwiperReviews = () => {
  const container = document.querySelector('.swiper');
  if (!container) {
    return () => { };
  }

  let swiper;

  document.addEventListener('DOMContentLoaded', () => {
    swiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      breakpoints: {
        768: {
          allowTouchMove: false,
        },
      },
      on: {
        init: function () {
          updateButtonStates(this);
        },
        slideChange: function () {
          updateButtonStates(this);
        },
      },
    });

    function updateButtonStates(swiperInstance) {
      const prevButton = document.querySelector('.reviews__button--prev');
      const nextButton = document.querySelector('.reviews__button--next');

      prevButton.disabled = true;
      nextButton.disabled = true;

      if (swiperInstance.isBeginning && !swiperInstance.params.loop) {
        prevButton.classList.add('disabled');
      } else {
        prevButton.classList.remove('disabled');
      }

      if (swiperInstance.isEnd && !swiperInstance.params.loop) {
        nextButton.classList.add('disabled');
      } else {
        nextButton.classList.remove('disabled');
      }
    }
  });

  return () => {
    if (swiper) {
      swiper.destroy();
    }

  };
};

export { initSwiperReviews };
