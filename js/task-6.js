function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  inputNumberEl: document.querySelector('input[type="number"]'),
  createBtnEl: document.querySelector("button[data-create]"),
  destroyBtnEl: document.querySelector("button[data-destroy]"),
  divBoxesEl: document.querySelector("#boxes"),
};

refs.createBtnEl.addEventListener("click", handleCreateButtonClick);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function handleCreateButtonClick() {
  if (
    Number(refs.inputNumberEl.value) > refs.inputNumberEl.max ||
    Number(refs.inputNumberEl.value) < refs.inputNumberEl.min
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(refs.inputNumberEl.value);
  }
}

function destroyBoxes() {
  refs.inputNumberEl.value = "";
  refs.divBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  const boxesArr = [];
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    const sizeIncrement = 30 + 10 * i;
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.width = `${sizeIncrement}px`;
    div.style.height = `${sizeIncrement}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesArr.push(div);
    refs.inputNumberEl.value = "";
  }
  return refs.divBoxesEl.append(...boxesArr);
}
