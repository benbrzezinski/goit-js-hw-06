const numberInput = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesSpace = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width = `${30 + 10 * i}px`;
    element.style.height = `${30 + 10 * i}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxesSpace.append(element);
  }
};

const destroyBoxes = () => {
  boxesSpace.innerHTML = "";
};

createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);
destroyBtn.addEventListener("click", destroyBoxes);
