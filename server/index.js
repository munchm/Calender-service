/* eslint-disable no-console */
const express = require('express');

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
app.get('/api/reservation/:id/restauraunt', controllerHandler.getRestaurant);
app.post('/api/reservation/restauraunt', controllerHandler.postReservation);
app.patch('/api/reservation/:id/restauraunt', controllerHandler.updateData);
app.delete('/api/reservation/:id/restauraunt', controllerHandler.deleteReservation);




app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
