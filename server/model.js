const db = require('../database');

const getData = (cb) => {
  const q = 'SELECT * FROM reservation';

  db.query(q, cb);
};

const getRestaurant = (id, cb) => {
  console.log(id)
  const q = `SELECT * FROM reservation WHERE restaurantId = (?)`;

  db.query(q, [id], cb);
};

const postData = (data , cb) => {

  const {restaurantId , reservationDate , reservationMonth, reservationDay,reservationTimes, currentYear,  available, people, firstName, lastName , email,phoneNumber, notes, openingTime, closingTime } = data;

  const q =`INSERT INTO reservation (restaurantId , reservationDate , reservationMonth, reservationDay,reservationTimes, currentYear,  available, people, firstName, lastName , email,phoneNumber, notes, openingTime, closingTime ) VALUES (?, ?, ?, ? ,?, ?, ? , ? , ? ,? ,? ,? ,?, ?, ?) `

  db.query(q, [restaurantId ,reservationDate , reservationMonth, reservationDay,reservationTimes, currentYear,  available, people, firstName, lastName , email,phoneNumber, notes, openingTime, closingTime ] ,cb);

}

const deleteData = (id , cb) => {

  const q = `DELETE FROM reservation WHERE restaurantId = ? `
  db.query(q, [id], cb);
}

const updateData = (id , data , cb) => {
  const firstName = data.firstName ;

  const q =`UPDATE reservation SET firstName = ?
  WHERE restaurantId = ? `

  db.query(q, [firstName , id ], cb);
}

module.exports = {
  getData,
  getRestaurant,
  postData,
  deleteData,
  updateData


};
