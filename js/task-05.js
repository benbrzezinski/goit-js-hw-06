const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeOutput = (e) => {
  nameOutput.innerText = e.currentTarget.value;

  if (e.currentTarget.value === "") {
    nameOutput.innerText = "Anonymous";
  }
};

nameInput.addEventListener("input", changeOutput);
