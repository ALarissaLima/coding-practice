const data = require('../data/zoo_data');

console.log(data.employees);
const getEmployeeByName = (employeeName) => {
  let objectEmployee = {};
  data.employees.forEach((employee) => {
    if (employeeName === employee.firstName || employeeName === employee.lastName) {
      objectEmployee = employee;
    }
  });
  return objectEmployee;
};

module.exports = getEmployeeByName;
