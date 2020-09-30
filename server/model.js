const db = require('../database');

const getData = (cb) => {
  const q = 'SELECT * FROM reservation';

  db.query(q, cb);
};

module.exports = {
  getData,
};
