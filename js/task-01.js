const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.innerText}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
