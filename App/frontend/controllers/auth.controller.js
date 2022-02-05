const User = require('../models/user.model');

exports.getRegister = (req, res) => {
  res.render('auth/register');
};

exports.postRegister = (req, res) => {
  const { email, username, password1, password2 } = req.body;
};
