const data = require('../data/zoo_data');

const sexFunction = (options, specieResidents) => {
  if (options !== undefined && options.sex !== undefined) {
    return specieResidents.filter((resident) => resident.sex === options.sex);
  }
  return specieResidents;
};
const undefinedSituation = (options, specie, objectAnimals) => {
  const animals = objectAnimals;
  if (options === undefined || options.includeNames === undefined) {
    if (specie.location in animals !== true) {
      animals[specie.location] = [];
    }
    animals[specie.location].push(specie.name);
  }
  return animals;
};

const includeNames = (options, specie, objectAnimals, specieResidents) => {
  let nickName = [];
  let nickNameOrdered = [];
  const animals = objectAnimals;
  if (options.sorted === true) {
    nickNameOrdered = specieResidents.map((resident) => resident.name).sort();
    animals[specie.location].push({ [specie.name]: nickNameOrdered });
  } else {
    nickName = specieResidents.map((resident) => resident.name);
    animals[specie.location].push({ [specie.name]: nickName });
  }
  return animals;
};

const definedSituation = (options, specie, objectAnimals, specieResidents) => {
  let animals = objectAnimals;
  if (specie.location in animals !== true) {
    animals[specie.location] = [];
  }
  if (options !== undefined && options.includeNames === true) {
    animals = includeNames(options, specie, animals, specieResidents);
  }
  return animals;
};

const getAnimalMap = (options) => {
  let objectAnimals = {};
  data.species.forEach((specie) => {
    let specieResidents = specie.residents;
    specieResidents = sexFunction(options, specieResidents);
    objectAnimals = undefinedSituation(options, specie, objectAnimals);
    objectAnimals = definedSituation(options, specie, objectAnimals, specieResidents);
  });

  return objectAnimals;
};

module.exports = getAnimalMap;
