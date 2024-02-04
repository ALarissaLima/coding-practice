const button = document.querySelector("#submitButton");
let inputPhoto = document.querySelector("#profile-photo");
let inputName = document.querySelector("#full-name");
let inputEmail = document.querySelector("#input-email");
let inputCountry = document.querySelectorAll("#input-country");
let paragrah = document.querySelector("#Result")
const getUserValue = (event) => {
    event.preventDefault();
    paragrah.innerHTML= `${inputName.value} ${inputEmail.value}.`;
}
button.addEventListener("click", getUserValue);