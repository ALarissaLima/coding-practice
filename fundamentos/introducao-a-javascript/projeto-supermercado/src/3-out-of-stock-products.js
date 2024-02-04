const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let produtoIndisponivel = [];
  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      produtoIndisponivel.push(stockProducts[index].productName);
    }
  }
  return produtoIndisponivel;
};
/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getOutOfStockProducts };
