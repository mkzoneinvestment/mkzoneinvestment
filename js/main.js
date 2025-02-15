(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Disable Owl Carousel's loop and use a smooth ticker effect
  $(".testimonial-carousel").owlCarousel({
    autoplay: false, // We handle animation with CSS
    loop: false, // Turn off loop since we’ll do it manually
    margin: 25,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2, // Show 2 items on small screens
      },
      768: {
        items: 4, // Show 4 items on larger screens
      },
    },
  });

  // Duplicate items for seamless scrolling
  let $carousel = $(".testimonial-carousel .owl-stage");
  let items = $carousel.html();
  $carousel.append(items).append(items); // Duplicate twice for smooth transition
})(jQuery);
