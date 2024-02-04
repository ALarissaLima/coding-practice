const sum = require('../src/sum');

describe('1 - Crie os casos de teste da funcão `Sum`', () => {

  it ('Testa se ao receber "4" e "5" como parâmetro, retorna "9" como resultado', () => {
    const resultado = sum(4,5);
    expect(resultado).toBe(9);
  });

  it ('Testa se ao receber "0" nos dois parâmetros, retorna o resultado "0"', () => {
    const resultado = sum(0,0);
    expect(resultado).toBe(0);
  });
  
  it ('Testa se dispara um erro, caso receba como parâmetro uma string', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });

  it ('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });
});
