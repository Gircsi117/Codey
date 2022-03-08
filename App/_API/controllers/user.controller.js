const User = require('../models/user.model');

const bcrypt = require('bcrypt');

exports.postModifyUsername = async (req, res) => {
  try {
    const { id, username } = req.body;

    if (!username) return res.send({ success: false, error: 'A felhasználónév mező nem lehet üres' });

    const foundUser = await User.findOne({ where: id });

    const isMatching = await bcrypt.compare(username, foundUser.password);
    if (isMatching) return res.send({ success: false, error: 'A felhasználónév és a jelszó nem egyezhetnek' });
    const newUsername = await User.update({ nev: username }, { where: { id: id } });
    if (!newUsername) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postModifyPassword = async (req, res) => {
  try {
    const { id, oldpassword, password1, password2 } = req.body;

    if (oldpassword == password1) return res.send({ success: false, error: 'Az új jelszó nem egyezhet a régivel' });
    if (!password1 || !password2) return res.send({ success: false, error: 'Tölts ki minden mezőt' });
    if (password1 != password2) return res.send({ success: false, error: 'A jelszavak nem egyeznek' });

    const hashedPassword = await bcrypt.hash(password1, 10);
    const newPassword = await User.update({ password: hashedPassword }, { where: { id: id } });
    if (!newPassword) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postSetHeight = async (req, res)=>{
  try {
    const { id, userHeight } = req.body;
    console.log(req.body);
    if (!userHeight) res.send({ success: false, error: 'Töltsd ki a mezőt' });
    const user = await User.update({magassag: userHeight}, {where: {id: id}});

    if(!user) return res.send({success: false, error: "Magasság felvétele sikertelen"})

    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
}

exports.postSetGender = async (req, res)=>{
  try {
    const { id, userGender } = req.body;

    if (!userGender) res.send({ success: false, error: 'Töltsd ki a mezőt' });
    const user = await User.update({nem: userGender}, {where: {id: id}});

    if(!user) return res.send({success: false, error: "Nem felvétele sikertelen"})

    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
}
