/* product left start */
const firstSlider = document.querySelector('.product-left');
if (firstSlider) {
  var productThumbs = new Swiper('.product-thumbs', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    direction: 'horizontal',
    slidesPerView: 5,
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var productSlider = new Swiper('.product-slider', {
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: true,
    direction: 'horizontal',
    thumbs: {
      swiper: productThumbs,
    },
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    resizeObserver: true,
  });
  // productSlider.controller.control = productThumbs;
  // productThumbs.controller.control = productSlider;
}
/* 	product left end */
