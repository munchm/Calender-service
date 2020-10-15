const mysql = require('mysql');
//const mySQL = require('../.env/config.js');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Successful connection to database :)');
  }
});

module.exports = connection;
