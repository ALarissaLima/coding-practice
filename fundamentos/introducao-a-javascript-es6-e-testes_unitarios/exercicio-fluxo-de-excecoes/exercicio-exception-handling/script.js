
function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);

  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const paragraph = document.getElementById('#result');
  const result = calculateSum();
  displayResult(result);
  if (value1 != Number || value2 != Number) {
    paragraph.innerHTML = 'Preencha os campos para realizar a soma';
    throw new Error('Preencha os campos para realizar a soma');
  } else if (value1 != Number && value2 != Number) {
    paragraph.innerHTML = 'nforme dois números para realizar a soma';
    throw new Error('Informe dois números para realizar a soma');
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

