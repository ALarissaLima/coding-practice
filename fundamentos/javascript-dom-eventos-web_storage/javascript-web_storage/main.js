const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
let target;

/* 1. Copie esse arquivo e edite apenas ele.
 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
transform: translateY(); reposiciona um elemento verticalmente no plano 2D.*/

/*2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.*/
const addClassTag = (event) => {

  target = event.currentTarget;
  if (target.className != 'tech') {
    firstLi.classList.remove('tech');
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
    target.classList.add('tech');
  }
}
firstLi.addEventListener('click', addClassTag);
secondLi.addEventListener('click', addClassTag);
thirdLi.addEventListener('click', addClassTag);

/*3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'.*/
let text;
const modifyText = () => {
  firstLi.addEventListener('click', addClassTag);
  secondLi.addEventListener('click', addClassTag);
  thirdLi.addEventListener('click', addClassTag);
  if (input.value != '') {
    text = input.value;
    target.innerText = `${text}`;
  }
}
input.addEventListener('keydown', modifyText);

/*4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
redirecione para alguma página.
4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.*/
const doubleClick = (event) => {
  window.location.href = "https://alarissalima.github.io/";
}
myWebpage.addEventListener('dblclick', doubleClick);

/*5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo.*/
const colorOn= (event) => {
    myWebpage.style.color = 'black';
}
myWebpage.addEventListener('mouseover', colorOn);

const colorOff = (event) => {
  myWebpage.style.color = 'white';

}
myWebpage.addEventListener('mouseout', colorOff);

// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.