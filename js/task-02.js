const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients')

const ingredientsList = ingredients.map(ingredient => {
  const ingredientRef = document.createElement('li')
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item')
  
  return ingredientRef;
})
  
listRef.append(...ingredientsList)