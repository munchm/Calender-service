const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');




const seed = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('restaurantTable.csv'));
    for (var i = 0; i < 1000000; i++) {
        writer.write({
          restaurantId : i+1,
          openingTime : faker.random.number({
            min: 9,
            max: 13,
          }),

          closingTime : faker.random.number({
            min: 20,
            max: 23,
          }),
        });
    }
    writer.end();
    console.log('The data generated');
  }

  await createReviewTableCSV();

}

seed();