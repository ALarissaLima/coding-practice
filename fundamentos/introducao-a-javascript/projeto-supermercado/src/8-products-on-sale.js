const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let produtosEmPromocao = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const ingrediente = stockProducts[index];
    if (ingrediente.onSale === true) {
      produtosEmPromocao.push({
        description: ingrediente.description,
        formattedPrice: `R$ ${ingrediente.price}`,
        onSale: ingrediente.onSale,
      });
    }
  }
  return produtosEmPromocao;
};
/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getProductsOnSale };
