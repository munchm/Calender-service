const fs = require('fs');
const faker = require('faker');
const writeStream = fs.createWriteStream('reservation.csv');
const count = 100;

// const db = require('./connection.js');
// const schema = require('./mongooseSchema.js');


const packageReservation = (i) => {
  const restuarantId = i + 1;
  const currentYear = 2020;
  const month = new Array(10).fill(null).map(number =>
    number = faker.random.number({
      min: 1,
      max: 12,
    })
  );
  const day = new Array(10).fill(null).map(day =>
    day = faker.random.number({
      min: 9,
      max: 23,
    })
  );

  const reservationDate = new Array(month, day);
  const reservationDay = new Array(day);
  const reservationMonth = new Array(month);

  const reservationTimes = new Array(10).fill(null).map(time =>
    time = faker.random.number({
      min: 9,
      max: 23,
    })
  );

  const reservationTime = faker.random.number({
    min: 9,
    max: 23,
  });

  const openingTime = faker.random.number({
    min: 9,
    max: 13,
  });

  const closingTime = faker.random.number({
    min: 20,
    max: 23,
  });

  const people = new Array(10).fill(null).map(ppl =>
    ppl = faker.random.number({
      min: 1,
      max: 6,
    })
  );

  const restaurantReservation = reservationTimes.forEach(people => {
    people = faker.random.number({
      min: 1,
      max: 6,
    });
  });

  const available = faker.random.boolean();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumberFormat();
  const notes = faker.company.catchPhraseNoun();

   return `${ restuarantId }, ${currentYear}, ${reservationDate}, ${reservationDay } ,${reservationMonth },${reservationTimes},${openingTimes},${closingTime},${people},${available},${firstName},${lastName},${email},${phoneNumber},${notes}`

};

(async() => {
  for (let i = 0; i < count; i += 1) {
    const reservationForThisProperty = 2 + Math.floor(Math.random() * 2);
    for (let j = 0; j < reservationForThisProperty; j += 1){
      const reservation = packageReview(i);
      if (!stream.write(reservation)) {
        await new Promise(resolve => stream.once('drain', resolve));
      }
    }
  }
})();

