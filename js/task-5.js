function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  color: document.querySelector(".color"),
  btnCngColor: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};
refs.btnCngColor.addEventListener("click", changeColor);

function changeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
  refs.btnCngColor.style.backgroundColor = getRandomHexColor();
  refs.btnCngColor.style.color = 'white';
}
