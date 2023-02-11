const body = document.querySelector("body");
const colorValueInHex = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorOnClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorValueInHex.innerText = getRandomHexColor();
};

changeColorBtn.addEventListener("click", changeColorOnClick);
