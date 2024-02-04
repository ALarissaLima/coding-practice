/*Exercício - Adicione o código a seguir a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.
 Acesse o elemento where-are-you.
Acesse parent a partir de where-are-you e adicione uma color a ele.
Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
Acesse o first-child a partir de parent.
Acesse o first-child a partir de where-are-you.
Acesse o texto Attention! a partir de where-are-you.
Acesse o third-child a partir de where-are-you.
Acesse o third-child a partir de parent. */
const body = document.getElementsByTagName("body");
const main = document.createElement('main');
body.appendChild(main);
main.namedItem("parent-of-parent");

const section = document.createElement('section');
main.appendChild(section);
section.namedItem("parent");

const section01 = document.createElement('section');
section.appendChild(section01);
section01.namedItem("first-child");

const section02 = document.createElement("section");
section.appendChild(section02);
section01.namedItem("where-are-you");

const section03 = document.createElement("section")