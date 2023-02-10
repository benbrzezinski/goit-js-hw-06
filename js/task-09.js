const body = document.querySelector("body");
const colorInHex = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorOnClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorInHex.innerText = getRandomHexColor();
};

changeColorBtn.addEventListener("click", changeColorOnClick);
