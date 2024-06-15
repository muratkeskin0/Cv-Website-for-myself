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

 // Fetch and display the about text
 fetch('Data/about-me.txt')
 .then(response => response.text())
 .then(data => {
     document.getElementById('about-text').textContent = data;
 })
 .catch(error => console.error('Error fetching text file:', error));
