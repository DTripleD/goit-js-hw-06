const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const inputTextContent = (event) => {
  if (event.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
};

inputName.addEventListener("input", inputTextContent);
