const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
const { input, nameOutput } = refs;

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const trimString = event.currentTarget.value.trim();
  nameOutput.textContent = trimString !== "" ? trimString : "Anonymous";
}
