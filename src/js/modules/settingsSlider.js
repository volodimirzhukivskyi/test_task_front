/* product left start */
const firstSlider = document.querySelector('.product-left');
if (firstSlider) {
  var productSlider = new Swiper('.product-slider', {
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 'auto',

    // loop: true,
    direction: 'horizontal',
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // resizeObserver: true,
  });
  var productThumbs = new Swiper('.product-thumbs', {
    spaceBetween: 0,
    centeredSlides: true,
    // loop: true,
    slideToClickedSlide: true,
    direction: 'horizontal',
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  productSlider.controller.control = productThumbs;
  productThumbs.controller.control = productSlider;
}
/* 	product left end */
