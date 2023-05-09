function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.getElementById('boxes'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const newBoxes = [];
  const boxAmount = refs.input.value;

  for (let i = 0; i < boxAmount; i++) {
    const createBox = document.createElement('div');

    createBox.style.width = `${30 + i * 10}px`;
    createBox.style.height = `${30 + i * 10}px`;
    createBox.style.backgroundColor = getRandomHexColor();

    newBoxes.push(createBox);
  }
  refs.divBoxes.append(...newBoxes);
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
}
