const formEl = document.querySelector(".login-form");



formEl.addEventListener("submit", returningValueOfForm);


function returningValueOfForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if(email.value === "" || password.value === ""){
        return alert("All fields must be filled!!!");
    }

    const userData = {
        Email: email.value,
        Password: password.value,
    }

    console.log(userData);

    event.currentTarget.reset();
}



