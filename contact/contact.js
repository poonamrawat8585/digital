 // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
      e.preventDefault();

      // Close feedback modal
      const feedbackModal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
      feedbackModal.hide();

      // Show success modal after a short delay
      setTimeout(() => {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
      }, 300);
    });