// const fs = require('fs');
// const faker = require('faker');
// const writeStream = fs.createWriteStream('users.csv');
// const count = 100;


// const packageUsers = (i) => {
//   const usrId = i + 1;


//   return  `${firstName},${lastName},${email},${phoneNumber}`

// };

// (async() => {
//   for (let i = 0; i < count; i += 1) {
//     const usersForThisProperty = 2 + Math.floor(Math.random() * 2);
//     for (let j = 0; j < usersForThisProperty; j += 1){
//       const usersTable = packageReview(i);
//       if (!stream.write(usersTable)) {
//         await new Promise(resolve => stream.once('drain', resolve));
//       }
//     }
//   }
// })();


// packageUsers();


const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');




const seed = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('Example.csv'));
    for (var i = 0; i < 100; i++) {

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
    console.log('CSV Generated');
  }
  await createReviewTableCSV();

}

seed();