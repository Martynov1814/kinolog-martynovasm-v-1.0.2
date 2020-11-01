var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function () {
  swiper.autoplay.stop();
});

document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function () {
  swiper.autoplay.start();
});