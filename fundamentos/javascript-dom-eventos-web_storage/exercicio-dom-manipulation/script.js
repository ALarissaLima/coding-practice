/* Exercício 1 - Alterando o texto */
const paragraph = document.getElementsByTagName('p');
paragraph[1].innerText = 'Me vejo uma profissional curiosa e gerando renda através da programação';

/* Exercício 5 - Letras maiúsculas */
paragraph[0].innerText = 'Texto padrão do nosso site'.toUpperCase();

/* Exercício 2 - Alterando a cor - elemento amarelo */
const body = document.getElementsByClassName('main-content')[0];
body.style.backgroundColor = 'rgb(76, 164, 109)';

/* Exercício 3 - Alterando a cor - elemento vermelho */
const section = document.getElementsByClassName('center-content')[0];
section.style.backgroundColor = 'rgb(255,255,255)';

/* Exercício 4 - Corrigindo o título */
const title = document.getElementsByTagName('h1');
title[0].innerText = 'Desafio - JavaScript';

/* Exercício 6 - Exibindo tags */
const list = [];
for (let index = 0; index < paragraph.length; index += 1) {
  list.push(paragraph[index].innerText);
}
const resultado = list.join(' ');
paragraph[3].innerText = `${resultado}`;
console.log(list);
