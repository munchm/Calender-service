const mongoose = require('mongoose');


const reservationSchema = mongoose.Schema({
  restaurantId :Number,
  people : String,
  openingTime: Number,
  closingTime: Number,
  reservationID : Number
  reservationMonth: String,
  reservationDay: String,
  reservationTimes: String,
  currentYear: String,
  reservationDate: String,
  notes: String,
  userId : Number,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,

});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;