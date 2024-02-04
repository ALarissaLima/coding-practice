const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let arrayVitaminas = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const produto = stockProducts[index];
    if (produto.nutritionalInfo.vitamins !== undefined) {
      let arrayInformacao = [];
      arrayInformacao.push(produto.nutritionalInfo.vitamins);
      arrayInformacao.join(' - ');
      arrayVitaminas.push({
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
        vitaminsInformation: arrayInformacao,
      });
    }
  } return arrayVitaminas;
};
  /*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getProductsRichInVitamin };
