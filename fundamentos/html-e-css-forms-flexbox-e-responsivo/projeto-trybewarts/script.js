const emailValue = document.querySelector('#txtname');
const senhaValue = document.querySelector('#txtsenha');
const formValue = document.querySelector('.trybewarts-login');
const btnSubmit = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');

const validateForm = () => {
  if (emailValue.value === 'tryber@teste.com' && senhaValue.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
formValue.addEventListener('submit', validateForm);
/* 18. Habilite o botão "Enviar" após a validação do checkbox */
btnSubmit.disabled = true;
const submitFunction = () => {
  if (agreementCheck.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = false;
  }
};
agreementCheck.addEventListener('click', submitFunction);

const preventFunction = (event) => {
  event.preventDefault();
};
formValue.addEventListener('submit', preventFunction);
