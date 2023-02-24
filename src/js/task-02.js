// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];



// ingredients.forEach(ingredient => {
//   const list = document.querySelector("#ingredients");
//   const listItem = document.createElement("li");

//   listItem.textContent = ingredient;

//   listItem.classList.add("item");
  
//   list.append(listItem);
// });


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const name = ingredients[i];
  const itemElm = document.createElement("li");
  itemElm.classList.add("item");
  itemElm.textContent = `${name}`;

  const listElm = document.getElementById("ingredients");
  listElm.append(itemElm);
}



