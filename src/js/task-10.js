function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#boxes");

function createBoxes(amount){

  let widthSize = 30;
  let heightSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const divCreator = document.createElement("div");
    divCreator.style.height = `${heightSize}px`;
    divCreator.style.width = `${widthSize}px`;
    divCreator.style.backgroundColor = `${getRandomHexColor()}`;
    widthSize += 10;
    heightSize += 10;
    mainDiv.append(divCreator);

  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("[type=number]");

console.log(inputEl.value);

// createButton.addEventListener("click", createBoxes(inputEl.value));


// createBtnEl.addEventListener('click', () => {
//   //console.log(inputNumberEl.value);
//   if (
//     Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
//     Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
//   ) {
//     alert('Please enter number from 1 to 100');
//   } else {
//     createBoxes(inputNumberEl.value.trim());
//   }
//   inputNumberEl.value = '';
// });

// destroyBtnEl.addEventListener('click', destroyBoxes);



