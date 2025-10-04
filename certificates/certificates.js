let currentSlide = 0;
    const totalSlides = 5;
    const carousel = new bootstrap.Carousel(document.getElementById('certificatesCarousel'), {
      interval: false // Disable auto-play
    });

    function updatePagination() {
      document.getElementById('currentPage').textContent = String(currentSlide + 1).padStart(2, '0');

      // Update button states
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      if (currentSlide === 0) {
        prevBtn.disabled = true;
      } else {
        prevBtn.disabled = false;
      }

      if (currentSlide === totalSlides - 1) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }
    }

    function previousSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        carousel.prev();
        updatePagination();
      }
    }

    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        carousel.next();
        updatePagination();
      }
    }

    // Listen for Bootstrap carousel events
    document.getElementById('certificatesCarousel').addEventListener('slid.bs.carousel', function (e) {
      currentSlide = Array.from(e.target.querySelectorAll('.carousel-item')).indexOf(e.relatedTarget);
      updatePagination();
    });

    // Initialize pagination
    updatePagination();

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        previousSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });