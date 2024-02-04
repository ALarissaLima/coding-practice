const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let lista = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    lista.push(stockProducts[index].productName);
  }
  return lista;
};

/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getUniqueProductsName };
