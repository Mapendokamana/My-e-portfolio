const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validate form
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Name is required');
  } else {
    removeError(nameInput);
  }
  
  if (!emailInput.value.trim()) {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Email is not valid');
  } else {
    removeError(emailInput);
  }
  
  if (!messageInput.value.trim()) {
    showError(messageInput, 'Message is required');
  } else {
    removeError(messageInput);
  }
  
  // Submit form if valid
  if (isValidForm()) {
    form.submit();
  }
});

function showError(input, message) {
  const error = input.parentElement.querySelector('.error-message');
  error.textContent = message;
  input.classList.add('has-error');
}

function removeError(input) {
  const error = input.parentElement.querySelector('.error-message');
  error.textContent = '';
  input.classList.remove('has-error');
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return
}
