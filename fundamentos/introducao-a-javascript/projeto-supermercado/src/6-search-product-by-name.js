const stockProducts = require('./data.json');

const searchProductByName = (nome) => {
  let informacoes = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    const stockProduct = stockProducts[index];
    if (nome === stockProduct.productName) {
      informacoes = {
        description: stockProduct.description,
        formattedPrice: `R$ ${stockProduct.price}`,
      };
      return informacoes;
    }
  }
  return null;
};
/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { searchProductByName };
