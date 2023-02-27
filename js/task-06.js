const inputEl = document.querySelector("#validation-input");

const dataLength = Number(inputEl.dataset.length);
console.log(dataLength);

function borderClass(event) {
  if (event.currentTarget.value === "") {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  } else if (dataLength === event.currentTarget.value.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", borderClass);
