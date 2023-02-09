const rangeInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const fontSizeControlling = (e) => {
  const presentValue = e.currentTarget.value;
  outputText.style.fontSize = `${presentValue}px`;
};

rangeInput.addEventListener("input", fontSizeControlling);
