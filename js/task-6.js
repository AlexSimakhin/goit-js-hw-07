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

  boxes.classList.remove('hidden');

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }

  boxes.append(...elements);
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
  boxes.classList.add('hidden');
  input.value = 1;
  createBtn.disabled = false;
}

createBtn.addEventListener('click', () => {
  let amount = Number(input.value);
  if (amount < 1 || amount > 100) return;

  createBoxes(amount);
});

input.addEventListener('input', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    createBtn.disabled = true;
  } else {
    createBtn.disabled = false;
  }
})

destroyBtn.addEventListener('click', destroyBoxes);
