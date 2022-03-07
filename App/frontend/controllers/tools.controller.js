const axios = require('axios');

exports.getGoalPage = (req, res) => {
  res.render('tools/goal');
};

exports.postSetGoal = (req, res) => {
  const { goalWeight } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postSetGoal',
    headers: { apisecret: 123 },
    data: { id, goalWeight },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postModifyWeight = (req, res) => {
  const { weight } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postModifyWeight',
    headers: { apisecret: 123 },
    data: { id, weight },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};
