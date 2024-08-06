$(document).ready(function() {
    var headerHeight = $('header').outerHeight();
    $('main').css('padding-top', headerHeight + 'px');
});

// Navbar Toggle Button For Mini Device
$('.nav-toggle-btn').click(function() {
    $('.nav-items-wrapper').toggleClass('menu-visible');
    $('body').toggleClass('body-overflow');
});

//Home Slider Js
$('.home-items-wrapper').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:true,
    autoplay: 3000,
    smartSpeed: 1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

// Courses Slider Js
$('.course-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: 3000,
    smartSpeed: 1000,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


// Testimonial Slider Js
$('.testimonial-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay: 3000,
    smartSpeed: 1000,
    responsiveClass:true,
    stagePadding: 350,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

//Client Slider JS
$('.client-items-wrapper').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  responsiveClass: true,
  autoplay: true,
  smartSpeed:1000,
  responsive: {
    0: {
      items: 1
    },
    676: {
      items: 2
    },
    991: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
  
});
