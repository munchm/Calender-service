const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 2050;
const controllerHandler = require('./controller.js');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.get('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.getReservation());
// app.post('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.postReservation());
// app.patch('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.updateReservation());
// app.delete('/calendar/year/:{month}-:{day}-:{time}', controllerHandler.deleteReservation());

app.get('/hello', (req, res) => {
  res.send('Connected to server side');
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});