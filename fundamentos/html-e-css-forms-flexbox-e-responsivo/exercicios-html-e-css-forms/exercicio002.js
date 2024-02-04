// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

/* Exercício 1 e 2*/
const clickFunction = (event) => {
    event.preventDefault();
}
hrefLink.addEventListener("click", clickFunction);
inputCheckbox.addEventListener("click", clickFunction);

/* Exercício 3 */
 const typeLetters = (event) => {
    console.log(event.keyCode);
    if (event.keyCode !== 65) {
        event.preventDefault();
    }
 }
 inputText.addEventListener("keydown", typeLetters);