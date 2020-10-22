const mongoose = require('mongoose');



const reservationSchema = mongoose.Schema({
  restaurantId :Number,
  people : String,
  openingTime: Number,
  closingTime: Number,
  reservationID : Number,
  reservationDate: String,
  reservationMonth: String,
  reservationDay: String,
  reservationTimes: String,
  currentYear: String,
  available: Boolean,
  notes: String,
  userId : Number,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,

});

const Reservation = mongoose.model('Reservation', reservationSchema);


const res = new Reservation({
  restaurantId : 8,
  people : 'kok',
  openingTime: 7,
  closingTime: 0,
  reservationID : 5,
  reservationDate: 'jg',
  reservationMonth: 'kh',
  reservationDay: 'gf',
  reservationTimes: 'hgh',
  currentYear: 'jhj',
  available: true,
  notes: 'kj',
  userId : 9,
  firstName: 'kj',
  lastName: 'khk',
  email: 'lkj',
  phoneNumber: 'jhjk',

})

res.save();
// mongoimport --host localhost:27017 --db reservation --collection reservationSchema --type csv --headerline --file /Users/haneenamro/SDC/calendar-reservation/ReservationMongoose.csv


module.exports = Reservation;