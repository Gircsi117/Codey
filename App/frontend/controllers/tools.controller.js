const axios = require('axios');

exports.getGoalPage = (req, res) => {
  res.render('tools/goal');
};

exports.postSetGoal = (req, res) => {
  const { goalWeight } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/user/postSetGoal',
    headers: { apisecret: 123 },
    data: { id, goalWeight },
  })
    .then((results) => {
      return res.send({ data: results.data });
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
    url: 'http://localhost:3001/user/postModifyWeight',
    headers: { apisecret: 123 },
    data: { id, weight },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSetHeight = (req, res) => {
  const { userHeight } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/user/postSetHeight',
    headers: { apisecret: 123 },
    data: { id, userHeight },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSetGender = (req, res) => {
  const { userGender } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/user/postSetGender',
    headers: { apisecret: 123 },
    data: { id, userGender },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
