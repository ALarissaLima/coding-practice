const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let arrayAlergia = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const produto = stockProducts[index];
    if (produto.allergyOrIntolerance !== undefined) {
      let alergias = produto.allergyOrIntolerance.join(' ');
      arrayAlergia.push({
        allergyOrIntoleranceMessage: `Pode conter: ${alergias}`,
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
      });
    } else {
      arrayAlergia.push({
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
      });
    }
  }
  return arrayAlergia;
};

/*  !!!!!!!NAO REMOVER!!!!!!! */
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
