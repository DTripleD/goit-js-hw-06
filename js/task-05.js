const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function inputTextContent(event) {
  if (event.currentTarget.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.currentTarget.value.trim();
  }
}

inputName.addEventListener("input", inputTextContent);
