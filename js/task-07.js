const refs = {
  input: document.getElementById('font-size-control'),
  span: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.span.style.fontSize = `${event.target.value}px`;
}
