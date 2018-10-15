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

// Mobile Menu
var el = document.querySelector('.btn_mnu');

el.onclick = function() {
  el.classList.toggle('active');
}

function toggleNav() {
  var mmenu = document.getElementById("nav");
  if (mmenu.style.display === "flex") {
    mmenu.style.display = "none";
  } else {
    mmenu.style.display = "flex";
  }
}
