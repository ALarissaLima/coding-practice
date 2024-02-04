const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let contador = stockProducts.length;
  return contador;
};

/* !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getUniqueProductsAmount };
