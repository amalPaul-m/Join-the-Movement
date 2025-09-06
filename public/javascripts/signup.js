
  // Password toggle
  document.querySelectorAll(".togglePassword").forEach(toggle => {
    toggle.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const icon = this.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  });

  // Validation + password match
  (() => {
    'use strict';
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', event => {
      if (form.password.value !== form.confirmPassword.value) {
        form.confirmPassword.setCustomValidity("Passwords do not match");
      } else {
        form.confirmPassword.setCustomValidity("");
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  })();


const countrySelect = document.getElementById('country');
const countryCodeSpan = document.getElementById('countryCode');
const mobileInput = document.getElementById('mobileInput');
const hiddenMobile = document.getElementById('mobile');
const mobileError = document.getElementById('mobileError');

function updateHiddenMobile() {
  const selectedOption = countrySelect.selectedOptions[0];
  const code = selectedOption.dataset.code;
  const pattern = selectedOption.dataset.pattern;
  const regex = new RegExp(pattern);

  // Validate mobile number
  if (!regex.test(mobileInput.value)) {
    mobileInput.classList.add('is-invalid');
    mobileError.style.display = 'block';
  } else {
    mobileInput.classList.remove('is-invalid');
    mobileError.style.display = 'none';
  }

  // Set hidden field: country code + number
  hiddenMobile.value = `${code} ${mobileInput.value}`;
}

// Update country code display when country changes
countrySelect.addEventListener('change', () => {
  const selectedOption = countrySelect.selectedOptions[0];
  countryCodeSpan.textContent = '+' + selectedOption.dataset.code;
  mobileInput.value = '';
  mobileError.style.display = 'none';
  updateHiddenMobile();
});

// Update hidden field on mobile input
mobileInput.addEventListener('input', updateHiddenMobile);

// Validate before form submit
document.querySelector('form').addEventListener('submit', (e) => {
  const selectedOption = countrySelect.selectedOptions[0];
  const pattern = selectedOption.dataset.pattern;
  const regex = new RegExp(pattern);
  if (!regex.test(mobileInput.value)) {
    e.preventDefault();
    mobileInput.classList.add('is-invalid');
    mobileError.style.display = 'block';
  } else {
    updateHiddenMobile();
  }
});





