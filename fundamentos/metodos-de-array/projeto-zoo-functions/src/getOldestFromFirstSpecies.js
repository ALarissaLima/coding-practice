const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((employees) => employees.id === id);
  const animalId = employee.responsibleFor[0];
  const species = data.species.find((specie) => specie.id === animalId);
  return (species && species.residents.length > 0)
    ? Object.values(species.residents.reduce((oldest, current) =>
      (current.age > oldest.age ? current : oldest))) : [];
};

module.exports = getOldestFromFirstSpecies;
