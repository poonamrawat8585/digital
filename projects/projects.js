document.addEventListener('DOMContentLoaded', function () {
      const carousel = new bootstrap.Carousel(document.getElementById('projectsCarousel'), {
        interval: false,  // Disable auto-sliding
        wrap: true       // Enable wrapping from last to first slide
      });

      const currentPageSpan = document.getElementById('currentPage');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const totalSlides = 5;
      let currentSlide = 1;

      // Update pagination display
      function updatePagination() {
        currentPageSpan.textContent = currentSlide.toString().padStart(2, '0');

        // Enable/disable buttons based on current slide
        prevBtn.disabled = currentSlide === 1;
        nextBtn.disabled = currentSlide === totalSlides;
      }

      // Previous button click
      prevBtn.addEventListener('click', function () {
        if (currentSlide > 1) {
          currentSlide--;
          carousel.prev();
          updatePagination();
        }
      });

      // Next button click
      nextBtn.addEventListener('click', function () {
        if (currentSlide < totalSlides) {
          currentSlide++;
          carousel.next();
          updatePagination();
        }
      });

      // Listen for carousel slide events to sync pagination
      document.getElementById('projectsCarousel').addEventListener('slid.bs.carousel', function (event) {
        currentSlide = event.to + 1;  // Bootstrap carousel is 0-indexed
        updatePagination();
      });

      // Initialize pagination
      updatePagination();
    });