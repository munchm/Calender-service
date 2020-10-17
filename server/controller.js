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

const postReservation = (req, res) => {
  const data = req.body;
  modelHandler.postReservation(data , (err,data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send();
    }
  })

}


const deleteReservation = (req, res) => {
  const id = req.params.id;

  modelHandler.deleteReservation(id, (err,data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(204).send();
    }
  })

}

const updateData = (req, res) => {
  const id = req.params.id;
  const data = req.body ;

  modelHandler.updateData(id, data, (err,data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  })
}


module.exports = {
  getData,
  getRestaurant,
  postReservation,
  deleteReservation,
  updateData,
};
