const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});