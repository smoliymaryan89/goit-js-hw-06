const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля мають бути заповненні');
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  form.reset();
}
