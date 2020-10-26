// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
// const faker = require('faker');


// let  currentYear = 2020;
// const seed = async () => {
//   const createReviewTableCSV = async () => {
//     writer.pipe(fs.createWriteStream('ReservationMongooseTable.csv'));
//     for (var i = 0; i < 100000000; i++) {

//         writer.write({

//           reservationID : i+1,
//           restaurantId :faker.random.number({
//             min: 1,
//             max: 10000000,
//           }),
//           usrId :faker.random.number({
//             min: 1,
//             max: 5000000,
//           }),
//           currentYear : currentYear,
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

// //         });
// //     }
// //     writer.end();

//   }

//   await createReviewTableCSV();

// }

// seed();


const faker = require('faker');
const fs = require('fs');

const ReservationCount = 100000000;
const filename = 'ReservationMongoose.csv';
const stream = fs.createWriteStream(filename);



const packageReservation = (i) => {
  const restaurantId = faker.random.number({
    min: 1,
    max: 10000000,
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
  const reservationID = i + 1;
  const day = faker.random.number({
    min: 1,
    max: 30,
  });

  const reservationMonth = faker.date.month();
  const reservationDay = faker.date.weekday();
  const reservationTime = faker.random.number({
    min: 9,
    max: 23,
  });
  const currentYear = 2020;
  const reservationDate = `${reservationDay}-${reservationMonth}-${day}-${currentYear}`;
  const notes = faker.company.catchPhraseNoun();

  const usrId = faker.random.number({
    min: 1,
    max: 5000000,
  });

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat();

  return `${restaurantId}${people},${openingTime},${closingTime},${reservationID},${reservationMonth},${reservationDay},${reservationTime},${currentYear},${reservationDate},${notes},${usrId},${firstName},${lastName},${email},${phoneNumber}\n`;
};

(async () => {
  for (let i = 0; i <= ReservationCount; i += 1) {
    const Reservation = packageReservation(i);
    if (!stream.write(Reservation)) {
      await new Promise(resolve => stream.once('drain', resolve));

}

  }


})();
console.log(`generated`);

