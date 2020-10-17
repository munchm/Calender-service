const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');


let  currentYear = 2020;
const month1 =faker.random.number({
  min: 1,
  max: 12,
})

const day1 = faker.random.number({
  min: 9,
  max: 23,
})
const seed = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('ReservationMongooseTable.csv'));
    for (var i = 0; i < 10000000; i++) {

        writer.write({

          reservationID : i+1,
          restaurantId :faker.random.number({
            min: 1,
            max: 1000000,
          }),
          usrId :faker.random.number({
            min: 1,
            max: 1000000,
          }),
          currentYear : currentYear,
          available: faker.random.boolean(),
          notes: faker.company.catchPhraseNoun(),

          reservationDay : faker.date.weekday(),
          reservationMonth : faker.date.month(),
          reservationTimes : faker.random.number({
                min: 9,
                max: 23,
              }),
          people :faker.random.number({
                min: 1,
                max: 6,
              }),
          openingTime : faker.random.number({
                min: 9,
                max: 13,
              }),

          closingTime : faker.random.number({
                min: 20,
                max: 23,
              }),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumberFormat(),

        });
    }
    writer.end();
    console.log('The data generated');
  }

  await createReviewTableCSV();

}

seed();