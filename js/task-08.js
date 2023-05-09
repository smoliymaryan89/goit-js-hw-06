const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
    alert('Всі поля мають бути заповненні');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }
  form.reset();
}
