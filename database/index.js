var pass = require('../.env/config.js');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: pass.key,
  datebase: 'calendar'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Successful connection to database :)');
  }
});

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) {
    throw err;
  }

  console.log('The solution is: ', rows[0].solution);
});

module.exports = connection;