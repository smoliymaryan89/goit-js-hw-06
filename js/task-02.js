const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');

  liEl.textContent = ingredient;
  liEl.classList.add('item');

  listEl.append(liEl);
});
