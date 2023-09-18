
const swiperContainer = ".swiperCarousel";
const slidesPerViewOptions = {
  largeScreen: 3,
  mediumScreen: 1.5,
  smallScreen: 1,
};

let swiperConfig = {
  slidesPerView: slidesPerViewOptions.smallScreen,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

if (window.innerWidth >= 769) {
  swiperConfig.slidesPerView = slidesPerViewOptions.largeScreen;
} else if (window.innerWidth <= 768 && window.innerWidth >= 481) {
  swiperConfig.slidesPerView = slidesPerViewOptions.mediumScreen;
} else if (window.innerWidth <= 480) {
  swiperConfig.slidesPerView = slidesPerViewOptions.smallScreen;
}

const defaultSwiper = new Swiper(swiperContainer, swiperConfig);

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      defaultSwiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      defaultSwiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  textFit(quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();

addEventListener("resize", (event) => {
  resizeTextToFit();
});
