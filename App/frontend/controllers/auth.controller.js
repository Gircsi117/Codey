const axios = require('axios');
require('dotenv').config();

exports.getRegister = (req, res) => {
  res.render('auth/register');
};

exports.postRegister = (req, res) => {
  const { email, username, password1, password2 } = req.body;

  axios({
    method: 'post',
    url: 'http://localhost:3001/auth/register',
    headers: { apisecret: process.env.API_SECRET },
    data: { email, username, password1, password2 },
  })
    .then((result) => {
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
    headers: { apisecret: process.env.API_SECRET },
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

exports.getLogin = (req, res) => {
  res.render('auth/login');
};

exports.postLogin = (req, res) => {
  const { email, password } = req.body;

  axios({
    method: 'post',
    url: 'http://localhost:3001/auth/login',
    headers: { apisecret: process.env.API_SECRET },
    data: { email, password },
  })
    .then((result) => {
      if (!result.data.success) return res.send(result.data);
      result.data.user.password = undefined;
      req.session.user = result.data.user;
      req.session.isAuth = true;
      req.session.save();
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLogout = async (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
};
