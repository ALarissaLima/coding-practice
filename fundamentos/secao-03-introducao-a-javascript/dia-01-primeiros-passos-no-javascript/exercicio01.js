/*Exercício 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (num1 + num2)
Subtração (num1 - num2)
Multiplicação (num1 * num2)
Divisão (num1 / num2)
Módulo (num1 % num2)*/

let num1= 10;
let num2= 97;
let resultado;

resultado=num1+num2;
console.log(resultado);
resultado=num1-num2;
console.log(resultado);
resultado=num1*num2;
console.log(resultado);
resultado=num1/num2;
console.log(resultado);
resultado=num1%num2;
console.log(resultado);

/*Exercício 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */
if (num1>num2){
  console.log (`Número maior: ${num1}`)
} else {
  console.log(`Númedo maior: ${num2}`)
}

/*Exercício 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */
let valor01= 7;
let valor02=19;
let valor03=5;
if (valor01>valor02 && valor01>valor03){
  console.log(`Maior valor: ${valor01}`)
} else if (valor02>valor01 && valor02>valor03){
  console.log(`Maior valor: ${valor02}`)
} else {
  console.log(`Maior valor: ${valor03}`)
}

