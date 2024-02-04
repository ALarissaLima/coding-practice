const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  let checkAge;
  data.species.forEach((specie) => {
    if (specie.name === animal) {
      checkAge = specie.residents.every((resident) => resident.age >= age);
    }
  });
  return checkAge;
};

module.exports = getAnimalsOlderThan;
