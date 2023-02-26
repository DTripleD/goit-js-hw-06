function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// to add color change on button
// function getRandomHexColor2() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const textOfColor = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  const oneColor = getRandomHexColor();
  body.style.backgroundColor = `${oneColor}`;
  textOfColor.textContent = `${oneColor}`;
  // changeColorButton.style.backgroundColor = `${getRandomHexColor2()}`;
}
