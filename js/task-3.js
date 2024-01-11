const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const trimString = event.currentTarget.value.trim();
  refs.nameOutput.textContent = trimString !== "" ? trimString : "Anonymous";
}
