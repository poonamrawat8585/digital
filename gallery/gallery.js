document.addEventListener('DOMContentLoaded', function () {
      const carousel = new bootstrap.Carousel(document.getElementById('galleryCarousel'), {
        interval: false,
        wrap: true
      });
      const currentPageSpan = document.getElementById('currentPage');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const totalSlides = 5;
      let currentSlide = 1;
      function updatePagination() {
        currentPageSpan.textContent = currentSlide.toString().padStart(2, '0');
        prevBtn.disabled = currentSlide === 1;
        nextBtn.disabled = currentSlide === totalSlides;
      }
      prevBtn.addEventListener('click', function () {
        if (currentSlide > 1) {
          currentSlide--;
          carousel.prev();
          updatePagination();
        }
      });
      nextBtn.addEventListener('click', function () {
        if (currentSlide < totalSlides) {
          currentSlide++;
          carousel.next();
          updatePagination();
        }
      });
      document.getElementById('galleryCarousel').addEventListener('slid.bs.carousel', function (event) {
        currentSlide = event.to + 1;
        updatePagination();
      });
      updatePagination();
    });