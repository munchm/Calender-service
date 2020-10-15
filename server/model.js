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

}

const deleteData = (id , cb) => {

}

const updateData = (id , data , cb) => {

}

module.exports = {
  getData,
  getRestaurant,
  postData,
  deleteData,
  updateData


};
