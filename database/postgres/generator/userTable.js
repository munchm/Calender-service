
// const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
// const faker = require('faker');






// const seed = async () => {
//   const createReviewTableCSV = async () => {
//     writer.pipe(fs.createWriteStream('UsrTable.csv'));
//     for (var i = 0; i < 1000000; i++) {
//         writer.write({
//           usrId : i+1,
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

const userCount = 1000000;
const filename = 'Users.csv';
const stream = fs.createWriteStream(filename);

const packageUser = (i) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email=  faker.internet.email();
    const phoneNumber = faker.phone.phoneNumberFormat();
  return `${firstName},${lastName},${email},${phoneNumber}\n`;
};

(async() => {
  for (let i = 0; i <= userCount; i += 1) {
      const users = packageUser(i);
      if (!stream.write(users)) {
        await new Promise(resolve => stream.once('drain', resolve));

    }
    console.log(`generated ${i}`);
  }


})();

