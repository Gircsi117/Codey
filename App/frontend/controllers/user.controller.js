const axios = require('axios');

exports.getSettingsPage = (req, res) => {
  res.render('tools/settings');
};

exports.postModifyUsername = (req, res) => {
  const { username } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/user/postModifyUsername',
    headers: { apisecret: 123 },
    data: { id, username },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postModifyPassword = (req, res) => {
  const { oldpassword, password1, password2 } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/user/postModifyPassword',
    headers: { apisecret: 123 },
    data: { id, oldpassword, password1, password2 },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};
