const refs = {
  loginForm: document.querySelector(".login-form"),
  inputEmail: document.querySelector("input-email"),
  button: document.querySelector("button"),
};

refs.loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();
  if (email || password !== "") {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  } else {
    alert("All form fields must be filled in");
  }
  refs.loginForm.reset();
}
