const { books } = require('./data/library');

const formatedBookNames = () => {
  const formatedArray = [];
  // escreva seu código aqui
  books.forEach((book) => {
    formatedArray.push(`${book.name} - ${book.genre} - ${book.author.name}`);
  });
  return formatedArray;
};

module.exports = { formatedBookNames };
