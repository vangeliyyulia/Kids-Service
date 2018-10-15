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
