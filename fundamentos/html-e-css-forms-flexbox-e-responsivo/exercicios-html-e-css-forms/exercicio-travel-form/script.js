const btnSubmit = document.querySelector('#submit-btn');
const btnagreement = document.querySelector('#agreement');
const form = document.querySelector('#main-form');
btnSubmit.disabled = true;
const submitFunction = () => {
  if (btnagreement.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = false;
  }
};
btnagreement.addEventListener('click', submitFunction);

const preventFunction = (event) => {
  event.preventDefault();
};
form.addEventListener('submit', preventFunction);
