/* eslint-disable no-console */
const express = require('express');
require('newrelic');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 2050;
const controllerHandler = require('./controller');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.post('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.postReservation());
// app.patch('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.updateReservation());
// app.delete('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.deleteReservation());

app.get('/api/reservation', controllerHandler.getData);
app.get('/api/reservation/restaurant/:id', controllerHandler.getRestaurant);
app.post('/api/reservation/restaurant', controllerHandler.postReservation);
app.patch('/api/reservation/restaurant/:id', controllerHandler.updateData);
app.delete('/api/reservation/restaurant/:id', controllerHandler.deleteReservation);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
