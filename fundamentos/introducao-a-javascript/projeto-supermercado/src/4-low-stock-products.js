const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let produtoEmBaixa = [];
  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      let stockIndex = stockProducts[index];
      produtoEmBaixa.push(`${stockIndex.productName}: ${stockIndex.quantityInStock} unidades`);
    }
  }
  return produtoEmBaixa;
};

/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getLowStockProducts };
