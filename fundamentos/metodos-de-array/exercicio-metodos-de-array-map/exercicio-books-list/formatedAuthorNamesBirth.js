const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  // escreva seu código aqui
  const formatedArray = [];
  books.forEach((book) => {
    formatedArray.push(`${book.author.name} - ${book.author.birthYear}`);
  });
  return formatedArray;
};

module.exports = { formatedAuthorNamesBirth };
