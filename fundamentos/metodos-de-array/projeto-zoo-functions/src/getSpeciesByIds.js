const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) => {
  const arraySpecies = [];
  data.species.forEach((specie) => {
    if (id1 === specie.id || id2 === specie.id) {
      arraySpecies.push(specie);
    }
  });
  return arraySpecies;
};

module.exports = getSpeciesByIds;
