document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide img');
    let currentIndex = 0;
  
    const nextSlide = () => {
      currentIndex++;
      if (currentIndex >= slideImages.length) {
        currentIndex = 0;
      }
      updateSlidePosition();
    };
  
    const updateSlidePosition = () => {
      slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    };
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  
    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  