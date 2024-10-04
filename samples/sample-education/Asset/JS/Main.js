$(document).ready(function(){
  $(".comments .owl-carousel").owlCarousel({
    rtl: true,
    margin: 10,
    loop: true,
    // autoplay:true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    mouseDrag:true,
    dotsEach:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: true
      },
      600: {
        items: 2,
        nav: true,
        loop:true,
        center: true,
        dotsEach:true,
      },
    }
  });
  $(".owl-carousel").owlCarousel({
    rtl: true,
    margin: 10,
    loop: true,
    // autoplay:true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    mouseDrag:true,
    dotsEach:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        center: true
      },
      600: {
        items: 3,
        nav: true,
        loop:true,
        center: true,
        dotsEach:true,
      },
    }
  });
})