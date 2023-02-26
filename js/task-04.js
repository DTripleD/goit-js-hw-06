const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let currentValue = Number(0);

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.innerHTML = currentValue;
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  counterValue.innerHTML = currentValue;
});
