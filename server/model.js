const db = require('../database');

const getData = (cb) => {
  const q = 'SELECT * FROM reservation';

  db.query(q, cb);
};

const getRestaurant = (id, cb) => {
  console.log(id)
  const q = `SELECT * FROM reservation WHERE restaurantId = (?)`;

  db.query(q, [id], cb);
}

module.exports = {
  getData,
  getRestaurant,
};
