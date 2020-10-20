/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// Gain access to the database
// eslint-disable-next-line import/no-absolute-path
const faker = require('faker');
const db = require('./index.js');

// eslint-disable-next-line no-const-assign
for (let i = 0; i <= 100; i += 1) {
  // Generating random data for the first table (month, day)
  const restuarantId = i + 1;
  const currentYear = 2020;
  const month = new Array(10).fill(null).map(number =>
    number = faker.random.number({
      min: 1,
      max: 12,
    })
  );
  const day = new Array(10).fill(null).map(day =>
    day = faker.random.number({
      min: 9,
      max: 23,
    })
  );

  // No API call for times so I created a static list of times users are able to choose from
  // try using faker.date_object!!!!
  // along with Date.prototypes
  // const reservationDate = faker.providers.date_between_dates({
  //   dateStart: (2020, 1, 1),
  //   dateEnd: (2020, 12, 31),
  // });

  const reservationDate = new Array(month, day);
  const reservationDay = new Array(day);
  const reservationMonth = new Array(month);

  const reservationTimes = new Array(10).fill(null).map(time =>
    time = faker.random.number({
      min: 9,
      max: 23,
    })
  );

  const reservationTime = faker.random.number({
    min: 9,
    max: 23,
  });

  const openingTime = faker.random.number({
    min: 9,
    max: 13,
  });

  const closingTime = faker.random.number({
    min: 20,
    max: 23,
  });

  const people = new Array(10).fill(null).map(ppl =>
    ppl = faker.random.number({
      min: 1,
      max: 6,
    })
  );

  const restaurantReservation = reservationTimes.forEach(people => {
    people = faker.random.number({
      min: 1,
      max: 6,
    });
  });

  const available = faker.random.boolean();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat();
  const notes = faker.company.catchPhraseNoun();

  const q = 'INSERT INTO reservation (restaurantId, reservationDate, reservationMonth, reservationDay, reservationTimes, currentYear, available, people, firstName, lastName, email, phoneNumber, notes, openingTime, closingTime) VALUES ( ?, "?", "?", "?", "?", "?", ?, "?", "?", "?", "?", "?", "?", ?, ?)';

  db.query(q, [
    restuarantId,
    reservationDate,
    reservationTimes,
    reservationMonth,
    reservationDay,
    currentYear,
    available,
    people,
    firstName,
    lastName,
    email,
    phoneNumber,
    notes,
    openingTime,
    closingTime
  ]);
}
