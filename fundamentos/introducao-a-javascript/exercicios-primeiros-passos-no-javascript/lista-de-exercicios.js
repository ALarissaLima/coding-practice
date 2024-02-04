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
  /*template literals */
  console.log(`Maior valor: ${valor01}`)
} else if (valor02>valor01 && valor02>valor03){
  console.log(`Maior valor: ${valor02}`)
} else {
  console.log(`Maior valor: ${valor03}`)
}

/*Exercício 4 - Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/
let lado01=60;
let lado02=60;
let lado03=20;
let soma=lado01+lado02+lado03;

if (lado01 <= 0 || lado02 <= 0 ||lado03 <= 0) {
  console.log(`ERRO! Reatribua com valores validos!`)
}else if (soma==180){
    console.log(`Os valores representam um triangulo? TRUE!`)
} else if (soma != 180){
  console.log(`Os valores representam um triangulo? FALSE!`)
} 

/*Exercício 5 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer. */




/*Exercício 6 - Há um par entre nós - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.*/
let num01=3;
let num02=1;
let num03=1;

if (num01 % 2 === 0 || num02 %2 === 0 || num03 %2 === 0){
  console.log("True")
}else {
  console.log(`O número é par? False`)
}

/*Exercício 7 - Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido. */

let salarioMinimo= 1500.10;
let inss;
let impostoDeRenda;
let salarioLiquido;

if (salarioMinimo >= 2594.93 && salarioMinimo<=5189.82){
    inss= salarioMinimo * 0.11
    salarioLiquido= salarioMinimo-inss
    if(salarioLiquido >= 1.903,99  <=2.826,65){
      salarioLiquido= salarioLiquido*0.75
      salarioLiquido= salarioLiquido-142,80;
      console.log(salarioLiquido)
    }
}