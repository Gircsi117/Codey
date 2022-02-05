const axios = require('axios');

exports.getRegister = (req, res) => {
  res.render('auth/register');
};

exports.postRegister = (req, res) => {
  const { email, username, password1, password2 } = req.body;

  axios({
    method: 'post',
    url: 'http://localhost:3001/auth/register',
    headers: { apisecret: '123' },
    data: { email, username, password1, password2 },
  })
    .then((result) => {
      console.log(result);
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getRegisterVerification = (req, res) => {
  const token = req.params.token;
  axios({
    method: 'post',
    url: 'http://localhost:3001/auth/register-verification/' + token,
    headers: { apisecret: '123' },
  })
    .then((result) => {
      if (!result.data.success) {
        return res.render('auth/token/failed');
      }
      return res.render('auth/token/success');
    })
    .catch((err) => {
      console.log(err);
    });
};
