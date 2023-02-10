const loginForm = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Fill in all fields!");
  }

  console.log({ Email: email.value, Password: password.value });
  e.currentTarget.reset();
};

loginForm.addEventListener("submit", handleSubmit);
