const loginForm = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  console.log({ Email: email.value, Password: password.value });

  if (email.value === "" || password.value === "") {
    alert("Fill in all fields!");
    return;
  }

  e.currentTarget.reset();
};

loginForm.addEventListener("submit", handleSubmit);
