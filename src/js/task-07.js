const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeFontSize = () => {
  textEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener("input", changeFontSize);
