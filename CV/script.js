let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
