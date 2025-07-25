// Testimonial Carousel and Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Carousel
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial');
  const totalSlides = slides.length;
  const carousel = document.getElementById('testimonialCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });
  
  // Auto-rotate testimonials
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
  
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = this.value.trim();
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // In a real app, you would redirect to search results page
        // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
      }
    }
  });
});