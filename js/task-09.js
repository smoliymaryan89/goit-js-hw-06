function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

refs.btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}
