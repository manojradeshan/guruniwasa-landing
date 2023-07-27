$('.owl-carousel').owlCarousel({
  stagePadding: 50,/*the little visible images at the end of the carousel*/
  loop: true,
  rtl: false,
  lazyLoad: true,
  margin: 0,
  nav: true,
  // autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
})