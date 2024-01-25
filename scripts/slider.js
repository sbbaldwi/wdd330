let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

function updateSlidePosition() {
    const distance = currentIndex * -100;
    slider.style.transform = `translateX(${distance}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', previousSlide);

// Optional: Stop auto-scroll when user interacts
let interval = setInterval(nextSlide, 5000);

slider.addEventListener('mouseenter', () => clearInterval(interval));
slider.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));
