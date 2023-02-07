const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const counter = document.querySelector("#value");

let counterValue = 0;

const decreasingClick = () => {
  counterValue--;
  counter.innerText = counterValue;
};
const increasingClick = () => {
  counterValue++;
  counter.innerText = counterValue;
};

decrementBtn.addEventListener("click", decreasingClick);
incrementBtn.addEventListener("click", increasingClick);
