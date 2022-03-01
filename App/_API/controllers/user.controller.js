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

exports.postSetGoal = async (req, res) => {
  const { id, goalWeight } = req.body;

  if (!goalWeight) res.send({ success: false, err: 'Töltsd ki a mezőt' });

  const newGoal = await User.update({ cel_suly: goalWeight }, { where: { id: id } });
  if (!newGoal) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};

exports.postModifyWeight = async (req, res) => {
  const { id, weight, date } = req.body;

  if (!weight) res.send({ success: false, error: 'Töltsd ki a mezőt' });

  const newWeight = await Weight.update({ suly: weight, datum: date }, { where: { id: id } });
  if (!newWeight) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};
