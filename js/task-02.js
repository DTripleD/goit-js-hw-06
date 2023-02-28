const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1 variant 

// ingredients.forEach((ingredient) => {
//   const list = document.querySelector("#ingredients");
//   const listItem = document.createElement("li");

//   listItem.textContent = ingredient;

//   listItem.classList.add("item");

//   list.append(listItem);
// });

// 2 variant 

// ingredients.map((ingredient) => {
//   const list = document.querySelector("#ingredients");
//   const listItem = document.createElement("li");

//   listItem.textContent = ingredient;
//   list.append(listItem);
  
//   listItem.classList.add("item");
// });



// 3 variant 

const list = document.querySelector("#ingredients");

const itemArray = [];

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  itemArray.push(listItem);
});

console.log(...itemArray);

list.append(...itemArray)
