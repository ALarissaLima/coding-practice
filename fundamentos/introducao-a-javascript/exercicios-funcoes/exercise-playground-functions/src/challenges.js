const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(string) {
  let stringDividida = string.split(' ');
  let meuArray = stringDividida;
  return meuArray;
};
splitSentence('go Trybe');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  let pontosVitoria = 3;
  let pontosEmpates = 1;
  let resultado01 = pontosVitoria * wins;
  let resultado02 = pontosEmpates * ties;
  return resultado01 + resultado02;
};
footballPoints(14, 8);

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  if (playlist.length === 0) {
    playlist.unshift({
      artist: artistName,
      music: musicName,
      musicTime: musicTime
    }); 
    return playlist;
  } else {
    playlist.push({
    artist: artistName,
    music: musicName,
    musicTime: musicTime
  });
  return playlist;
  } 
};

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

function moreExpensive(data, category) {
  let maiorValor = 0;
  let nomeItem = '';
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].price > maiorValor) {
      maiorValor = data[category][index].price
      nomeItem = data[category][index].name
    }
  }
  return `O produto mais caro é: ${nomeItem}, que custa: R$${maiorValor.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].name === item) {
      return true;
    }

  } return false;

};

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, category, item, price, ingredients, calories) => {
  if (checkItem(data, category, item) === true) {
    return `O produto: "${item}" já existe!`;
  } else{
  const novoItem = {
    name: item,
    price: price,
    ingredients: ingredients,
    calories: calories
  }
  data[category].push(novoItem);
  return novoItem;
}
  
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
const counterGender = (data) => {
  let male = 0;
  let female = 0;

  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      male += 1;
    } else if (data.guests[index].gender === 'female') {
      female += 1;
    }
  }

  return {
    male: male,
    female: female 
  }
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
let estadosArray = []
function filterState(data, state){
  for (let index = 0; index < data.length; index += 1) {
    if (data[index].state === state){
      estadosArray = data[index]
      return data[index]
    } else {
      return estadosArray
    }
}
}

// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture (data, link){
  var picture = [{
    "picture": "LINK DA IMAGEM",
  },
  {
    "picture": link,
  }];
  for (let index = 0; index < data.length; index += 1) {
    if (data.length[index] === "picture" && data.length[index] === "https://picsum.photos/200/300"){
  return picture;
}
  } 
}


// Requisito 10 - Crie um função que gera um relatório

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => { }),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => { }),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => { }),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => { }),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => { }),
  filterState: typeof filterState === 'function' ? filterState : (() => { }),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => { }),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => { }),
};