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