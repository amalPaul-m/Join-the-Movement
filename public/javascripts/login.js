// Password toggle
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    password.type = "password";
    togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

// Form validation
const form = document.getElementById("loginForm");
form.addEventListener("submit", function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});