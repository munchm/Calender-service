const modelHandler = require('./model');

const getData = (req, res) => {
  modelHandler.getData((err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
};

const getRestaurant = (req, res) => {
  const id = req.params.id;

  modelHandler.getRestaurant(id, (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getData,
  getRestaurant,
};
