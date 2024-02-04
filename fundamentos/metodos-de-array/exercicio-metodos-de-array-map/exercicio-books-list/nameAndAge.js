const { books } = require('./data/library');

const nameAndAge = () => {
  // escreva seu código aqui
  const objectName = [];
  books.forEach((book) => {
    objectName.push({
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    });
  });
  objectName.sort((a, b) => a.age - b.age);
  return objectName;
};

module.exports = { nameAndAge };
