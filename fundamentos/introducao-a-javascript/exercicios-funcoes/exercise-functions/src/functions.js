// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(string) {
  let palavraInvertida = string.split('');
  palavraInvertida = palavraInvertida.reverse();
  palavraInvertida = palavraInvertida.join('');
  if (palavraInvertida === string) {
    return true;
  }
}
verifyPalindrome('arara');

// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let highestIndex = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (highestIndex < array[index]) {
      highestIndex = array[index];
    }
  } return array.indexOf(highestIndex);
}
getHighestIndex([2, 3, 6, 7, 10, 1]);

// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(array) {
  let highestIndex = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (highestIndex > array[index]) {
      highestIndex = array[index];
    }
  } return array.indexOf(highestIndex);
}
getSmallestIndex([2, 4, 6, 7, 10, 0, -3]);

// Requisito 4 - Crie a função getLongestWord
function getLongestWord(array) {
  let longestWord = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (longestWord.length < array[index].length) {
      longestWord = array[index];
    }
  } return longestWord;
}
getLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array) {
  array.sort();
  array.reverse();
  let numTemp = array[0];
  if (numTemp < -1) {
    array.sort();
    numTemp = array[0];
  }
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numTemp === array[index]) {
      numTemp = array[index];
      contador += 1;
    }
  } return contador;
}
countHighestNumberMaxOccurrences([-2, -2, -1]);
// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
