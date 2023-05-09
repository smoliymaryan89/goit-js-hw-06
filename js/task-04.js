const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  updateVaule();
});

refs.btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  updateVaule();
});

function updateVaule() {
  refs.value.textContent = counterValue;
}
