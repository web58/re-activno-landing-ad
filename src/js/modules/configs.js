const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  cases: {
    loop: true,
    navigation: {
      prevEl: '.cases__controls [data-to-slide="prev"]',
      nextEl: '.cases__controls [data-to-slide="next"]',
    },
  }
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const observerConfig = {
  header: {
    rootMargin: '100px',
    threshold: 0
  },
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const justBurgerConfig = {
  animationSpeed: 300,
  menuId: 'mobile-menu',
};

export {
  sliderConfig,
  smoothScrollConfig,
  observerConfig,
  justBurgerConfig
};
