// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
// const faker = require('faker');


// let  currentYear = 2020;

// const seed = async () => {
//   const createReviewTableCSV = async () => {
//     writer.pipe(fs.createWriteStream('ReservationTable.csv'));
//     for (var i = 0; i < 10000000; i++) {

//         writer.write({

//           reservationID : i+1,
//           people :faker.random.number({
//             min: 1,
//             max: 6,
//           }),
//           reservationDate : (faker.date.month(),faker.date.weekday()),
//           reservationMonth : faker.date.month(),
//           reservationDay : faker.date.weekday(),
//           reservationTimes : faker.random.number({
//             min: 9,
//             max: 23,
//           }),
//           currentYear : currentYear,
//           available: faker.random.boolean(),
//           notes: faker.company.catchPhraseNoun(),
//           restaurantId :faker.random.number({
//             min: 1,
//             max: 1000000,
//           }),
//           usrId :faker.random.number({
//             min: 1,
//             max: 1000000,
//           }),

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

const ReservationCount = 10000000;
const filename = 'Reservation.csv';
const stream = fs.createWriteStream(filename);



const packageReservation = (i) => {
    const  people  =faker.random.number({
        min: 1,
        max: 6,
      });
    const reservationDate = (faker.date.month(),faker.date.weekday());
    const reservationMonth = faker.date.month();
    const reservationDay = faker.date.weekday();
    const reservationTimes = faker.random.number({
        min: 9,
        max: 23,
      });
    const currentYear = 2020;
    const available =  faker.random.boolean();
    const notes=  faker.company.catchPhraseNoun();
    const restaurantId = faker.random.number({
        min: 1,
        max: 1000000,
      });
    const usrId = faker.random.number({
        min: 1,
        max: 1000000,
      });

  return `${people},${reservationDate},${reservationMonth},${reservationDay},${reservationTimes},${currentYear},${available},${notes},${restaurantId},${usrId}\n`;
};

(async() => {
  for (let i = 0; i <= ReservationCount; i += 1) {
      const Reservation = packageReservation(i);
      if (!stream.write(Reservation)) {
        await new Promise(resolve => stream.once('drain', resolve));

    }
    console.log(`generated ${i}`);
  }


})();

