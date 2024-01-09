const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim() !== ""
    ? (refs.nameOutput.textContent = event.currentTarget.value.trim())
    : refs.nameOutput.textContent;
}
