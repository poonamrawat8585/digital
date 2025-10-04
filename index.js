 document.addEventListener('DOMContentLoaded', function () {
        const carouselElement = document.getElementById('buildingCarousel');
        const carousel = new bootstrap.Carousel(carouselElement, { interval: false, ride: false, pause: true });
        const slides = carouselElement.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        const currentPage = document.getElementById('currentPage');
        const totalPages = document.getElementById('totalPages');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentSlide = 0;

        totalPages.textContent = totalSlides.toString().padStart(2, '0');
        function updatePagination() {
          currentPage.textContent = (currentSlide + 1).toString().padStart(2, '0');
          prevBtn.disabled = currentSlide === 0;
          nextBtn.disabled = currentSlide === totalSlides - 1;
        }
        updatePagination();

        prevBtn.addEventListener('click', function () {
          if (currentSlide > 0) {
            carousel.prev();
          }
        });
        nextBtn.addEventListener('click', function () {
          if (currentSlide < totalSlides - 1) {
            carousel.next();
          }
        });

        carouselElement.addEventListener('slid.bs.carousel', function (e) {
          currentSlide = Array.from(slides).indexOf(e.relatedTarget);
          updatePagination();
        });

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft') prevBtn.click();
          if (e.key === 'ArrowRight') nextBtn.click();
        });
      });