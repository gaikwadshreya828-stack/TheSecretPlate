// ============================================
// THE SECRET PLATE — Contact Page
// ============================================

(function () {
  'use strict';
  if (!window.TSP) return;

  const { showToast } = window.TSP;

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');

      // Clear form
      form.querySelectorAll('.form-input, .form-textarea').forEach(input => input.value = '');

      // Show success state
      const formWrapper = form.closest('.contact-form-wrapper');
      if (formWrapper) {
        formWrapper.innerHTML = `
          <div class="confirmation" style="padding:2rem 1rem;">
            <div class="confirmation-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <h2>Message Sent</h2>
            <p>"Thank you, ${name}. We'll be in touch soon."</p>
            <div class="confirmation-actions">
              <button class="btn btn-outline" onclick="location.reload()">Send Another</button>
            </div>
          </div>
        `;
      }
      showToast('Your message has been sent');
    });
  }
})();