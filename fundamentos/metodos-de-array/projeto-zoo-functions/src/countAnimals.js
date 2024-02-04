const data = require('../data/zoo_data');

const countAnimals = (parameters) => {
  const objectAnimals = {};
  let numberOfanimalsBySex = 0;
  let numberOfanimals = 0;

  data.species.forEach((specie) => {
    if (parameters === undefined) {
      objectAnimals[specie.name] = specie.residents.length;
    } else if (parameters.species === specie.name) {
      numberOfanimals = specie.residents.length;
      numberOfanimalsBySex = specie.residents.filter((resident) =>
        parameters.sex === resident.sex).length;
    }
  });

  if (parameters === undefined) {
    return objectAnimals;
  } if (parameters.sex === undefined) {
    return numberOfanimals;
  } return numberOfanimalsBySex;
};

module.exports = countAnimals;
