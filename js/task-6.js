function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");

createBtnEl.addEventListener("click", createElements);

destroyBtnEl.addEventListener("click", destroyBoxes);

function createElements() {
  if (
    Number(inputNumberEl.value) > inputNumberEl.max ||
    Number(inputNumberEl.value) < inputNumberEl.min
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumberEl.value);
  }
  // inputNumberEl.value = "";
}

function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  let defaultSize = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    defaultSize += 10 * i;
    const div = document.createElement("div");
    div.classList = "item";
    div.style.width = `${defaultSize}px`;
    div.style.height = `${defaultSize}px`;
    div.style.marginRight = "30px";
    div.style.marginBottom = "30px";
    div.style.backgroundColor = getRandomHexColor();
    boxesArr.push(div);
    // console.log("arr length", boxesArr.length);
  }
  return divBoxesEl.append(...boxesArr);
}
