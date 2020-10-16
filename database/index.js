const mysql = require('mysql');
//const mySQL = require('../.env/config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Heno12345$',
  database: 'calendar'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Successful connection to database :)');
  }
});

module.exports = connection;
