const input = document.getElementById('validation-input');

input.addEventListener('blur', validationCheck);

function validationCheck(event) {
  const inputLength = input.dataset.length;

  if (event.target.value.trim().length === Number(inputLength)) {
    input.classList.remove('invalid');
    onValid();
  } else {
    input.classList.remove('valid');
    onInvalid();
  }
}

function onValid() {
  input.classList.add('valid');
}
function onInvalid() {
  input.classList.add('invalid');
}
