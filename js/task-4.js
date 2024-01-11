const refs = {
  loginForm: document.querySelector(".login-form"),
};

refs.loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();
  if (email !== "" && password !== "") {
    const formData = {
      email,
      password,
    };
     event.target.reset();
    console.log(formData);
  } else {
    alert("All form fields must be filled in");
  }
 
}
