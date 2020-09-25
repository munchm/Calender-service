// Gain access to the database
const db = require('/database/index');
var faker = require('faker');

// Generating random data for the first table (month, day)
const month = faker.date.month();

const day = faker.random.number();

// Generating random data for the second table (time, available, people, firstName, lastName, email, phoneNumber, notes)
// No API call for times so I created a static list of times users are able to choose from
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
  '9:00', '9:15', '9:30', '9:45'
]);

const time = reservationTimes(faker.random.number({
  min: 0,
  max: reservationTimes.length - 1
}));

const available = faker.random.boolean();

const people = faker.random.number({
  min: 1,
  max: 6
});

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const phoneNumber = faker.phoneNumberFormat();
const notes = faker.company.catchPhraseNoun();

