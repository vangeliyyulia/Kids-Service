// Slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__toggle");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};


// Mobile Menu
(function () {
  var hamburger = {
    navToggle: document.querySelector('.btn_mnu'),
    nav: document.querySelector('.nav__list'),
    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('active');
      this.nav.classList.toggle('active');

    }
  };
  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });
}());

// Carousel 
var carouselOneByOne = new PureJSCarousel({
  carousel: '#carousel',
  slide: '.stuff__items-carousel',
  oneByOne: true,
  infinite: true
});

// Animation on Scroll
AOS.init({
  once: true
});

// Button Top
var goTopBtn = document.querySelector('.btn-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('active');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('active');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.btn-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();