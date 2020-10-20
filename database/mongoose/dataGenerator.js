// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
// const faker = require('faker');


// let  currentYear = 2020;
// const seed = async () => {
//   const createReviewTableCSV = async () => {
//     writer.pipe(fs.createWriteStream('ReservationMongooseTable.csv'));
//     for (var i = 0; i < 10000000; i++) {

//         writer.write({

//           reservationID : i+1,
//           restaurantId :faker.random.number({
//             min: 1,
//             max: 1000000,
//           }),
//           usrId :faker.random.number({
//             min: 1,
//             max: 1000000,
//           }),
//           currentYear : currentYear,
//           available: faker.random.boolean(),
//           notes: faker.company.catchPhraseNoun(),
//           reservationDay : (faker.date.month(),faker.date.weekday()),
//           reservationDay : faker.date.weekday(),
//           reservationMonth : faker.date.month(),
//           reservationTimes : faker.random.number({
//                 min: 9,
//                 max: 23,
//               }),
//           people :faker.random.number({
//                 min: 1,
//                 max: 6,
//               }),
//           openingTime : faker.random.number({
//                 min: 9,
//                 max: 13,
//               }),

//           closingTime : faker.random.number({
//                 min: 20,
//                 max: 23,
//               }),
//           firstName: faker.name.firstName(),
//           lastName: faker.name.lastName(),
//           email: faker.internet.email(),
//           phoneNumber: faker.phone.phoneNumberFormat(),

//         });
//     }
//     writer.end();
//     console.log('The data generated');
//   }

//   await createReviewTableCSV();

// }

// seed();



const faker = require('faker');
const fs = require('fs');

const reservationCount = 10000000;
const filename = 'ReservationMongoose.csv';
const stream = fs.createWriteStream(filename);

const packageReservation = (i) => {

  const reservationID = i+1;
  const restaurantId = faker.random.number({
    min: 1,
    max: 1000000,
  });
  const usrId = faker.random.number({
    min: 1,
    max: 1000000,
  });
  const currentYear = 2020;
  const available = faker.random.boolean();
  const notes = faker.company.catchPhraseNoun();
  const reservationDate =  (faker.date.month(),faker.date.weekday());
  const reservationDay = faker.date.weekday();
  const reservationMonth =  faker.date.month();
  const reservationTimes = faker.random.number({
        min: 9,
        max: 23,
      });
  const people = faker.random.number({
        min: 1,
        max: 6,
      });
  const openingTime = faker.random.number({
        min: 9,
        max: 13,
      });

  const closingTime = faker.random.number({
        min: 20,
        max: 23,
      });
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat();

  return `${openingTime},${closingTime}\n`;
};

(async() => {
  for (let i = 0; i <= reservationCount; i += 1) {
      const Reservation = packageReservation(i);
      if (!stream.write(Reservation)) {
        await new Promise(resolve => stream.once('drain', resolve));

    }
    console.log( `data generated  ${i} records`)

  }
})();