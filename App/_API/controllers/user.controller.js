const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.postModifyUsername = async (req, res) => {
  const { id, username } = req.body;

  if (!username) return res.send({ success: false, error: 'A felhasználónév mező nem lehet üres' });

  const foundUser = await User.findOne({ where: id });

  const isMatching = await bcrypt.compare(username, foundUser.password);
  if (isMatching) return res.send({ success: false, error: 'A felhasználónév és a jelszó nem egyezhetnek' });
  const newUsername = await User.update({ nev: username }, { where: { id: id } });
  if (!newUsername) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};

exports.postModifyPassword = async (req, res) => {
  const { id, oldpassword, password1, password2 } = req.body;

  if (oldpassword == password1) return res.send({ success: false, error: 'Az új jelszó nem egyezhet a régivel' });
  if (!password1 || !password2) return res.send({ success: false, error: 'Tölts ki minden mezőt' });
  if (password1 != password2) return res.send({ success: false, error: 'A jelszavak nem egyeznek' });

  const hashedPassword = await bcrypt.hash(password1, 10);
  const newPassword = await User.update({ password: hashedPassword }, { where: { id: id } });
  if (!newPassword) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};
