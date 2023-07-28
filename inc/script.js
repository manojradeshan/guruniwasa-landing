$("#owl-carousel1").owlCarousel({
  // stagePadding: 50,/*the little visible images at the end of the carousel*/
  loop: true,
  rtl: false,
  lazyLoad: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3500,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

$("#owl-carousel2").owlCarousel({
  // stagePadding: 50,/*the little visible images at the end of the carousel*/
  loop: true,
  rtl: false,
  lazyLoad: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

$("#owl-carousel3").owlCarousel({
  // stagePadding: 50 /*the little visible images at the end of the carousel*/,
  loop: true,
  rtl: false,
  lazyLoad: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3800,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

// navbar close onclick
$(document).ready(function () {
  $(document).click(function () {
    // if($(".navbar-collapse").hasClass("in")){
    $(".navbar-collapse").collapse("hide");
    // }
  });
});

// preloader
$(document).ready(function () {
  setTimeout(function () {
    $("#ctn-preloader").addClass("loaded");

    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $("#preloader")
        .delay(1000)
        .queue(function () {
          $(this).remove();
        });
    }
  }, 2000);
});

// copyright text year
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
