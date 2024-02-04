const data = require('../data/zoo_data');

module.exports = {
  getSchedule: (scheduleTarget) => {
    const objectInformation = {
      Tuesday: {
        officeHour: '',
        exhibition: [],
      },
      Wednesday: {
        officeHour: '',
        exhibition: [],
      },
      Thursday: {
        officeHour: '',
        exhibition: [],
      },
      Friday: {
        officeHour: '',
        exhibition: [],
      },
      Saturday: {
        officeHour: '',
        exhibition: [],
      },
      Sunday: {
        officeHour: '',
        exhibition: [],
      },
      Monday: {
        officeHour: 'Closed',
        exhibition: [],
      },
    };

    data.species.forEach((specie) => {
      if (scheduleTarget === specie.name) {
        specie.availability.forEach((day) => {
          objectInformation[day].exhibition.push(specie.name);
        });
      }
    });

    data.species.forEach((specie) => {
      specie.availability.forEach((day) => {
        objectInformation[day].officeHour = `${data.hours[day].open}:${data.hours[day].close}`;
      });
    });

    let result;

    if (scheduleTarget && typeof scheduleTarget === 'string') {
      result = data.species.reduce((acc, specie) => {
        if (scheduleTarget === specie.name) {
          acc = specie.availability;
        }
        return acc;
      }, []);
    } else if (scheduleTarget && typeof scheduleTarget === 'string' && Object.keys(objectInformation).includes(scheduleTarget)) {
      result = {
        officeHour: objectInformation[scheduleTarget].officeHour,
        exhibition: objectInformation[scheduleTarget].exhibition,
      };
    } else if (!scheduleTarget) {
      result = objectInformation;
    } else if (scheduleTarget === 'Monday') {
      result = 'The zoo is closed on Monday.';
    } else {
      result = 'Invalid parameter. Please provide a valid animal, day, or leave it empty for general schedule.';
    }

    return result;
  },
};


module.exports = getSchedule;
