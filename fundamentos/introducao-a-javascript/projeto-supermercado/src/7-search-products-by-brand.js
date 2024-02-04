const stockProducts = require('./data.json');

const searchProductsByBrand = (marca) => {
  let listaDescricao = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const produto = stockProducts[index];
    if (marca === produto.brand) {
      listaDescricao.push({
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
      });
    }
  }
  return listaDescricao;
};
/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { searchProductsByBrand };
