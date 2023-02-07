const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.innerText = ingredient;
  element.classList.add("item");
  list.append(element);
});
