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
  const year = '2020';
  const month = faker.random.arrayElement([
    'October', 'November', 'December',
  ]);
  const day = faker.random.number({
    min: 1,
    max: 28,
  });

  // No API call for times so I created a static list of times users are able to choose from
  // try using faker.date_object!!!!
  // along with Date.prototypes
  // const reservationDate = faker.providers.date_between_dates({
  //   dateStart: (2020, 1, 1),
  //   dateEnd: (2020, 12, 31),
  // });

  const reservationDate = `(${month}, ${day}, ${year})`;

  const reservationTime = faker.random.arrayElement([
    '11:00', '11:15', '11:30', '11:45',
    '12:00', '12:15', '12:30', '12:45',
    '1:00', '1:15', '1:30', '1:45',
    '2:00', '2:15', '2:30', '2:45',
    '3:00', '3:15', '3:30', '3:45',
    '4:00', '4:15', '4:30', '4:45',
    '5:00', '5:15', '5:30', '5:45',
    '6:00', '6:15', '6:30', '6:45',
    '7:00', '7:15', '7:30', '7:45',
    '8:00', '8:15', '8:30', '8:45',
    '9:00',
  ]);

  const people = faker.random.number({
    min: 1,
    max: 6,
  });

  const available = faker.random.boolean();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat();
  const notes = faker.company.catchPhraseNoun();

  const q = 'INSERT INTO reservation (restuarantId, reservationDate, reservationTime, available, people, firstName, lastName, email, phoneNumber, notes) VALUES ( (?), "(?)", "(?)", (?), (?), "(?)", "(?)", "(?)", "(?)", "(?)")';

  db.query(q, [
    restuarantId,
    reservationDate,
    reservationTime,
    available,
    people,
    firstName,
    lastName,
    email,
    phoneNumber,
    notes,
  ]);
}
