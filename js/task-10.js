function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector('[type="number"]');

mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "wrap";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";

function createBoxes(amount) {
  if (
    inputEl.value === "" ||
    Number(inputEl.value) > 100 ||
    Number(inputEl.value) === 0
  ) {
    alert("Enter a number from 1 to 100");
    return;
  }

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = `<div style = "margin: 20px; background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px;"></div>`;
    size += 10;
    mainDiv.insertAdjacentHTML("beforeend", div);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  mainDiv.innerHTML = "";
}

createButton.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyButton.addEventListener("click", destroyBoxes);

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    createBoxes(inputEl.value);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Backspace") {
    destroyBoxes();
  }
});
