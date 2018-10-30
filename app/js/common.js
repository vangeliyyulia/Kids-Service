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
document.addEventListener('DOMContentLoaded', function () {
  
  window.onscroll = function () {
      var backToTop = document.getElementById("backToTop"),
          scrollPosition = (window.pageYOffset);
      
      if (scrollPosition > 500) {
          backToTop.className = "show";
      } else backToTop.className = "notShow"
  };
});

// Lazy Load 
kit.createLazy();



