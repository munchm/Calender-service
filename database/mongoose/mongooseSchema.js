const mongoose = require('mongoose');

;

const reservationSchema = mongoose.Schema({
  restaurantId :Number,
  people : String,
  openingTime: Number,
  closingTime: Number,
  reservationID : Number
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

module.exports = Reservation;