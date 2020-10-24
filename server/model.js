/* eslint-disable max-len */
const db = require('../database/postgres');

const getData = (cb) => {
  const q = 'SELECT * FROM reservation';

  db.query(q, cb);
};

const getRestaurant = (id, cb) => {
  console.log(id);
  const q = `select * from reservation join restaurant on reservation.restaurantId =  restaurant.restaurantId  join users on reservation.usrId = users.usrId where reservation.restaurantId = ${id}`;

  db.query(q, cb);
};

const postReservation = (reservation, cb) => {
  const {
    // eslint-disable-next-line max-len
    people, reservationdate, reservationmonth, reservationday, reservationtime, currentyear, notes, restaurantid, usrid,
  } = reservation;

  const q = `insert into reservation (people , reservationDate, reservationMonth, reservationDay, reservationTime, currentYear, notes, restaurantId, usrId) values ('${people}', '${reservationdate}', '${reservationmonth}', '${reservationday}' ,'${reservationtime}', '${currentyear}', '${notes}' , ${restaurantid} ,${usrid} ) `;

  db.query(q, cb);
};

const deleteReservation = (id, cb) => {
  console.log('delete me ');
  const q = `DELETE FROM reservation WHERE reservation.restaurantId = ${id} `;
  db.query(q, cb);
};

const updateData = (id, data, cb) => {
  const { notes } = data;

  const q = ` UPDATE reservation SET notes = '${notes}'
    WHERE reservation.usrId = ${id} ;
  `;

  db.query(q, cb);
};

module.exports = {
  getData,
  getRestaurant,
  postReservation,
  deleteReservation,
  updateData,

};
