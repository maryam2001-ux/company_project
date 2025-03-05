

// *Setup and start animation!  for the typing effect

var typed = new Typed('.typing', {
  strings: ["for usgae of company" , "for  company" , " of company"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true

});




// *slider


// Select elements
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

// Function to update the slider
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.remove('active');
    if (index === currentSlide) {
      thumbnail.classList.add('active');
    }
  });
}

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

// Thumbnail click functionality
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// Initialize the slider
updateSlider();


// اختيار العناصر
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// وظيفة تبديل القائمة
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});