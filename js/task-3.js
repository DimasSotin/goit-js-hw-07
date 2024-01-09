const inputRef = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.includes(" ")) {
    nameOutput.textContent = nameOutput.textContent.trim();
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
