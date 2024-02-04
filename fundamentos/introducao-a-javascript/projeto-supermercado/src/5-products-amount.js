const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let totalDeProdutos = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0) {
      totalDeProdutos += stockProducts[index].quantityInStock;
    }
  }
  return totalDeProdutos;
};
/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getProductsAmount };
