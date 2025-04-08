const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  destroyBoxes();

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    elements.push(box);
    size += 10;
  }

  boxes.append(...elements);
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) return;

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
