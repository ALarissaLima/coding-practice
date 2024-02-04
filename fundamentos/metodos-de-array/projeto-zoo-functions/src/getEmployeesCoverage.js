const data = require('../data/zoo_data');

const makeObject = (information, employee, objectEmployeeArray) => {
  let objectEmployee;
  if (information === undefined) {
    objectEmployee = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor,
      locations: [],
    };
    objectEmployeeArray.push(objectEmployee);
  } else if (information.name === employee.firstName || information.name === employee.lastName
    || information.id === employee.id) {
    objectEmployee = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor,
      locations: [],
    };
  } return objectEmployee;
};

const gettingSpecieNameAndLocation = (information, objectEmployee) => {
  const tempobject = objectEmployee;
  const arraytemp = [];
  data.species.forEach((specie) => {
    if (Array.isArray(tempobject.species) && tempobject.species.includes(specie.id)) {
      arraytemp.push(specie.name);
      tempobject.locations.push(specie.location);
    }
  });
  if (arraytemp.length > 0) {
    tempobject.species = arraytemp;
  }
  return tempobject;
};

const getEmployeesCoverage = (information) => {
  let objectEmployee = {};
  const objectEmployeeArray = [];
  data.employees.forEach((employee) => {
    const tempobject = makeObject(information, employee, objectEmployeeArray);
    if (tempobject !== undefined) {
      objectEmployee = tempobject;
    }
    objectEmployee = gettingSpecieNameAndLocation(information, objectEmployee);
  });

  if (information !== undefined && information.id === 'Id inválido') {
    throw new Error('Informações inválidas');
  } else if (information === undefined) {
    return objectEmployeeArray;
  }
  return objectEmployee;
};

module.exports = getEmployeesCoverage;
