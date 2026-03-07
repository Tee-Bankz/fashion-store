document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    name.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');

    let valid = true;

    /* NAME */

    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required';
      name.classList.add('error-border');
      valid = false;
    }

    /* EMAIL */

    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required';
      email.classList.add('error-border');
      valid = false;
    } else if (!email.value.includes('@')) {
      emailError.textContent = 'Enter a valid email';
      email.classList.add('error-border');
      valid = false;
    }

    /* MESSAGE */

    if (message.value.trim() === '') {
      messageError.textContent = 'Message cannot be empty';
      message.classList.add('error-border');
      valid = false;
    }

    /* SUCCESS */

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});
