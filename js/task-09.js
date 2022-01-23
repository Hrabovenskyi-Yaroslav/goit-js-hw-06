
const bodyRef = document.querySelector('body')
const changeColorRef = document.querySelector('.change-color')

changeColorRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  bodyRef.setAttribute('style', `background-color: ${getRandomHexColor()};`);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}