const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calendar')
  .then(() => console.log('connected to mongoDB'))
  .catch((err) => console.log('Error connecting to the DB: ', err));


const db = mongoose.connection;




const reservationSchema = mongoose.Schema({
  people : String,
  restaurantId :Number,
  reservationDate: String,
  reservationMonth: String,
  reservationDay: String,
  reservationTimes: String,
  currentYear: String,
  available: Boolean,
  notes: String,
  openingTime: Number,
  closingTime: Number,
  user : [{
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
  }]

})



const Reservation = mongoose.model('Reservation', reservationSchema);