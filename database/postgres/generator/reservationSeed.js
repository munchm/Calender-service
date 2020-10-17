const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');


let  currentYear = 2020;

const seed = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('ReservationTable.csv'));
    for (var i = 0; i < 10000000; i++) {

        writer.write({

          reservationID : i+1,
          people :faker.random.number({
            min: 1,
            max: 6,
          }),
          reservationDate : (faker.date.month(),faker.date.weekday()),
          reservationMonth : faker.date.month(),
          reservationDay : faker.date.weekday(),
          reservationTimes : faker.random.number({
            min: 9,
            max: 23,
          }),
          currentYear : currentYear,
          available: faker.random.boolean(),
          notes: faker.company.catchPhraseNoun(),
          restaurantId :faker.random.number({
            min: 1,
            max: 1000000,
          }),
          usrId :faker.random.number({
            min: 1,
            max: 1000000,
          }),

        });
    }
    writer.end();
    console.log('The data generated');
  }

  await createReviewTableCSV();

}

seed();

