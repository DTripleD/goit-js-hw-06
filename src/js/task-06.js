const inputEl = document.querySelector("#validation-input");

const dataLength = Number(inputEl.dataset.length);
console.log(dataLength);

const borderClass = (event) => {
    if (event.currentTarget.value === ""){
        inputEl.classList.remove("invalid"); 
        inputEl.classList.remove("valid");
    } else if (dataLength > event.currentTarget.value.length){
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
}

inputEl.addEventListener("blur", borderClass);


