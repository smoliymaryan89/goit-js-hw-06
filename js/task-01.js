const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => {
  const categoryTitle = el.querySelector('h2');
  console.log(`Category: ${categoryTitle.textContent}`);

  const categoryItem = el.querySelectorAll('li');
  console.log(`Elements: ${categoryItem.length}`);
});
