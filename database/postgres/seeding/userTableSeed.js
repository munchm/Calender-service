
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');




const seed = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('UsrTable.csv'));
    for (var i = 0; i < 1000000; i++) {

      for (var j = 0; j < ( 2 + Math.floor(Math.random() * 2)); j++) {

        writer.write({
          usrId : j+1,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumberFormat(),
        });
      }
    }
    writer.end();
    console.log('The data generated');
  }
  await createReviewTableCSV();

}



seed();