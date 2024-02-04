/* const { en } = require('@faker-js/faker'); */

const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const child = entrants.filter((entrant) => entrant.age < 18);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const count = {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
  return count;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  } if (entrants.length === 0) {
    return 0;
  }
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const child = entrants.filter((entrant) => entrant.age < 18);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const adultPrice = adult.length * data.prices.adult;
  const childPrice = child.length * data.prices.child;
  const seniorPrice = senior.length * data.prices.senior;
  return adultPrice + childPrice + seniorPrice;
};

module.exports = { calculateEntry, countEntrants };
