/* const readline = require('readline-sync');

function bodyMassIndex(weight, height) {
  try {
    if (weight === 0 || height === 0) {
      throw new Error('Digite números válidos para que o cálculo seja realizado');
    }
    const result = weight / (height * height);
    return result;
  } catch (e) {
    console.log('ERRO:', e.message);
  }
};

function main() {
  let bmiSituation;

  const weight = readline.questionFloat(`What’s your weight?`);
  const height = readline.questionFloat(`What’s your height?`);
  const bmi = bodyMassIndex(weight, height);
  const imc = bmi.toFixed(2);

  if (imc < 18.5) {
    bmiSituation = 'abaixo do peso (magreza)'
  } else if (imc >= 18.5 & imc <= 24.9) {
    bmiSituation = 'com o peso normal'
  } else if (imc >= 25.0 & imc <= 29.9) {
    bmiSituation = 'acima do peso (sobrepeso)'
  } else if (imc >= 30.0 & imc <= 34.9) {
    bmiSituation = 'com obesidade grau I'
  } else if (imc >= 35.0 & imc <= 39.9) {
    bmiSituation = 'com obesidade grau II'
  } else if (imc >= 40) {
    bmiSituation = 'com obesidade grau  III ou IV'
  }
  console.log(`Seu índice de massa corporal é: ${imc}. Você encontra-se ${bmiSituation}.`);
};

main(); */
