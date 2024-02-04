const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const retorno = createMenu();
    const parametro = { food: {}, drinks: {} };
    const parametroCheio = {food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}};
    let menu = createMenu(parametroCheio);
    expect(retorno).toHaveProperty('fetchMenu');
    expect(typeof retorno.fetchMenu).toBe('function');
    //2
    expect(createMenu({ food: {}, drinks: {}}).fetchMenu()).toMatchObject({ food: {}, drinks: {}});
    //3
    expect(createMenu(parametro).fetchMenu()).toEqual(parametro);
    //5
    expect(createMenu(parametro)).toHaveProperty('consumption', []);
    //7
    expect(createMenu(parametro).order('Coca-Cola')).toEqual('Item indisponível');
    menu.order('coxinha');
    expect(menu).toHaveProperty('consumption', ['coxinha']);
   //9 
   menu.order('picanha');
   expect(menu).toHaveProperty('consumption', ['coxinha']);
   menu.order('agua');
   menu.order('sanduiche');
   expect(menu).toHaveProperty('consumption', ['coxinha', 'agua', 'sanduiche']);
   // 10
   menu.order('coxinha'); /**PARA PASSAR PARAMETRO PARAS AS FUNCOES SEM RETORNO */
   expect(menu).toHaveProperty('consumption', ['coxinha', 'agua', 'sanduiche','coxinha']);
   // 11
   expect(typeof menu.pay).toBe('function');
   // 12
   expect(menu.pay()).toEqual('23.76');

  });
});
