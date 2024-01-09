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

refs.createBtnEl.addEventListener("click", createElements);

refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function createElements() {
  if (
    Number(refs.inputNumberEl.value) > refs.inputNumberEl.max ||
    Number(refs.inputNumberEl.value) < refs.inputNumberEl.min
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(refs.inputNumberEl.value);
  }
  refs.inputNumberEl.value = "";
}

function destroyBoxes() {
  refs.inputNumberEl.value = "";
  refs.divBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const defaultSize = 30 + 10 * i;
    const div = document.createElement("div");
    // console.log(div);
    div.classList.add("item");
    div.style.width = `${defaultSize}px`;
    div.style.height = `${defaultSize}px`;
    div.style.marginRight = "30px";
    div.style.marginBottom = "30px";
    div.style.backgroundColor = getRandomHexColor();
    boxesArr.push(div);
    // console.log("arr length", boxesArr.length);
  }
  return refs.divBoxesEl.append(...boxesArr);
}
