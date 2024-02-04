const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const resultFilter = books
    .filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica');
  return resultFilter;
};
// Requisito 2
const oldBooksOrdered = (year) => {
  const oldBooks = books.filter(({ releaseYear }) => releaseYear <= 1960);
  const orderedBooks = oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
  return orderedBooks;
};

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  const ArrayAuthorBirth = books.filter(({ author }) => author.birthYear === birthYear)
    .map(({ name }) => name);
  return ArrayAuthorBirth;
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  const orderedAuthors = books
    .filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica')
    .map(({ author }) => author.name)
    .sort();
  return orderedAuthors;
};

// Requisito 5
const oldBooks = (year) => {
  const arrayOldBooks = books.filter(({ releaseYear }) => releaseYear <= 1960)
    .map(({ name }) => name);
  return arrayOldBooks;
};

// Requisito 6
const authorWith3DotsOnName = () => {
  const authorName = books.find((book) => book.author.name === 'J. R. R. Tolkien');
  return authorName.name;
};
module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
