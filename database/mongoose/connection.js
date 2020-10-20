const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost/reservation';

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const { connection } = mongoose;


connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {

  console.log(`MongoDB database connection established successfully at ${connectionStr}`);
});

module.exports = connection;