const modelHandler = require('./model');

const getData = (req, res) => {
  modelHandler.getData((err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getData,
};
