const refs = {
  input: document.getElementById('name-input'),
  span: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.target.value.trim() === '') {
    refs.span.textContent = 'Anonymous';
  } else {
    refs.span.textContent = event.target.value;
  }
}
