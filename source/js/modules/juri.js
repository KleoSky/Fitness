import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import '../../sass/vendor/swiper.css';

const initSwiper = () => {
  const container = document.querySelector('.swiper');
  if (!container) return;

  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(container, {
      loop: true,
      loopAdditionalSlides: 2,
      loopSlides: 8,
      normalizeSlideIndex: true,
      watchSlidesProgress: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.juri__button--next',
        prevEl: '.juri__button--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
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
      const prevButton = document.querySelector('.juri__button--prev');
      const nextButton = document.querySelector('.juri__button--next');

      prevButton.disabled = false;
      nextButton.disabled = false;

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

    // container.addEventListener('mouseenter', () => {
    //   swiper.params.autoplay?.disable();
    // });

    // container.addEventListener('mouseleave', () => {
    //   swiper.params.autoplay?.enable();
    // });
  })

  return () => swiper.destroy();
};

export {initSwiper};
