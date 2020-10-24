// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
// const faker = require('faker');




// const seed = async () => {
//   const createReviewTableCSV = async () => {
//     writer.pipe(fs.createWriteStream('restaurantTable.csv'));
//     for (var i = 0; i < 1000000; i++) {
//         writer.write({
//           restaurantId : i+1,
//           openingTime : faker.random.number({
//             min: 9,
//             max: 13,
//           }),

//           closingTime : faker.random.number({
//             min: 20,
//             max: 23,
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

const restaurantCount = 10000000;
const filename = 'Restaurant.csv';
const stream = fs.createWriteStream(filename);

const packageRestaurant = (i) => {

  const openingTime = faker.random.number({
    min: 9,
    max: 13,
  });

  const closingTime = faker.random.number({
    min: 20,
    max: 23,
  });
  return `${openingTime},${closingTime}\n`;
};

(async () => {
  for (let i = 0; i <= restaurantCount; i += 1) {
    const Restaurant = packageRestaurant(i);
    if (!stream.write(Restaurant)) {
      await new Promise(resolve => stream.once('drain', resolve));

    }


  }
})();
console.log(`data generated`);