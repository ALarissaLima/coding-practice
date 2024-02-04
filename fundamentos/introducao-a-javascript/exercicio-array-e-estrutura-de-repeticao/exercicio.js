const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
let biggestNumber = 0;
let arrayOdd = [];
console.log('Imprimindo todos os valores constidos no array:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i];
    if (biggestNumber < numbers[i]) {
        biggestNumber = numbers[i]
    }
    if (numbers[i] % 2 !== 0) {
        arrayOdd.push(numbers[i]);
    } else {
        console.log(`Nenhum valor ímpar encontrado`);
    }
}
average = sum / numbers.length;
if (average > 20) {
    console.log(`O valor da média aritmética é maior que 20`);
} else {
    console.log(`O valor da média aritmética é menor ou igual a 20`);
}
console.log(`A soma dos valores é: ${sum}`);
console.log(`O maior número é: ${biggestNumber}`);
console.log(`Os números ímpares são: ${arrayOdd}`);

/* Desafio fatorial */
let number = 10;
let numberTemp = number;
let factorial = 0;
for (let j = number; j > 0; j--) {
    numberTemp = numberTemp * j;
}
console.log(`Fatorial : ${numberTemp}`);

/** Desafio de inverter palavra */
let word = 'tryber';
let invertedWord = [];

for (let k = (word.length - 1); k >= 0; --k) {
    invertedWord.push(word[k]);
}
console.log(invertedWord);

/* Desafio dos asteriscos */
let n = 5;
let asteriscos = '*';
for (let i = 0; i < n; ++i) {
    asteriscos += '*';
}
for (let j = 0; j < n; ++j) {
    console.log(asteriscos);
}

/* Desafio da pirâmide de asteriscos*/

let n2 = 5;
let asteriscos2 = '*'
for (let i = 0; i < n2; ++i) {
    console.log(asteriscos2);
    asteriscos2 += '*';
}

/* Desafio dos asteriscos, parte 2 */

let n3 = 5;
let asteriscos3 = [' '];
for (let j = 1; j < n3; ++j) {
    asteriscos3.push(' ');
}
for (let i = 0; i < n3; i++) {
   asteriscos3.push('*');
   asteriscos3.shift();
   let string = asteriscos3.join('');
    console.log(string);
}

lines= '1 2 2 2'


let numbers1 = lines.split(' ');
let lowerNumber =numbers1[0];
let index = 0;
let count = 0;
for(let i = 0; i < numbers1.length; i++){
    if(numbers1[i] < lowerNumber){
        lowerNumber = numbers1[i]
        index = [i];
        count += 1;
    }
}
if (count === 0){
    console.log(count)
} else {
let result = Number(index)+ 1; 
console.log(result);
}