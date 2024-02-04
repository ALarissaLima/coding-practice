const data = require('../data/zoo_data');

const isManager = (id) => {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
};

const getRelatedEmployees = (managerId) => {
  const arrayEmploees = [];
  data.employees.forEach((employee) => {
    employee.managers.forEach((manager) => {
      if (manager.includes(managerId)) {
        arrayEmploees.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
  });

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return arrayEmploees;
};

module.exports = { isManager, getRelatedEmployees };
