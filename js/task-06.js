const textInput = document.querySelector("#validation-input");

const inputValidation = (e) => {
  if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.remove("invalid");
    return;
  }

  e.currentTarget.classList.add("invalid");
  e.currentTarget.classList.remove("valid");
};

textInput.addEventListener("blur", inputValidation);
