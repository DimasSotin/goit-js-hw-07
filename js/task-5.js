function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  color: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};
refs.changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.color.textContent = randomColor;
});
