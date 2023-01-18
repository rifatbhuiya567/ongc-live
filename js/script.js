$(window).load(function(){
    'use strict';

    $("#preloader").delay(500).fadeOut('slow');

    $(".backtotop i").hide();
});
// Load js end

$(document).ready(function(){
  'use strict';

  $('body').vegas({
      transition: 'fade', 
      delay: 5000,
      slides: [
          {src: 'images/banner-one.jpeg'},
          {src: 'images/banner-two.jpg'},
          {src: 'images/banner-there.jpg'},
          {src: 'images/banner-four.jpg'}
      ]
  });
});
// Background slide js end

$(window).scroll(function(){
    'use strict';

  let scrolling = $(this).scrollTop();

  if( scrolling > 100){
    $(".backtotop i").fadeIn(500);
  }
  else{
    $(".backtotop i").fadeOut(500);
  }
  // Back2top scrolling condition end

  if( scrolling > 40){
    $(".myNav").addClass("nav-anim");
  }
  else{
    $(".myNav").removeClass("nav-anim");
  }
  // Navbar scrolling condition end
});
// Scrolling js end

$(".backtotop i").click(function(){
    'use strict';

    $("html, body").animate({
      scrollTop:0
    },300)
});
//  Back2top js end

$(".nav-search i").click(function(){
    'use strict';

    $(".search").toggleClass("search_bar");

    $(".add-color").toggleClass("color-change");
});
// Nav-search js end

$(".portal .portal-heading").click(function(){
    'use strict';

    $(".portal-inner").toggleClass("portal-visual");
});
// Portal js end

AOS.init();
// Aos

$('.widgetSlide').slick({
  dots: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '.next',
  prevArrow: '.prev',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 300,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        speed: 300,
      }
    }
  ]
});
// Widget carousel js end


let projectHide = document.querySelector(".project-content-hide");
let galleryItems = document.querySelector(".project-gallery");

function myGallery() {
  projectHide.style.display='none'
  galleryItems.style.display='block'
};

function returnButton() {
  projectHide.style.display='block'
  galleryItems.style.display='none'
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("gallery-btm-images");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};
// Gallery toggle js end

$('.counter').counterUp({
  delay: 10,
  time: 1500
});
// counter js end