const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const ProtonMail = require('protonmail-api');
require('dotenv').config;

const randomString = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.postRegister = async (req, res) => {
  try {
    const { email, username, password1, password2 } = req.body;

    let errors = [];

    if (!email || !username || !password1 || !password2) errors.push('Tölts ki minden mezőt!');

    const Lenght = RegExp(/^.{8,32}$/);
    const hasNumber = RegExp(/^.*[0-9].*$/);
    const hasUpperLowerCase = RegExp(/(?=.*[a-z])(?=.*[A-Z])/);

    if (errors.length < 1) {
      if (!Lenght.test(password1)) errors.push('A jelszónak min. 8 max. 32 karakternek kell lennie');
      if (!hasNumber.test(password1)) errors.push('A jelszónak tartalmaznia kell számot');
      if (!hasUpperLowerCase.test(password1)) errors.push('A jelszónak tartalmaznia kell kis- és nagybetűket is');
    }

    if (errors.length > 0) return res.send({ success: false, errors });

    if (errors.length < 1) {
      const existEmail = await User.findOne({ where: { email } });
      const existUser = await User.findOne({ where: { nev: username } });
      if (existEmail) errors.push('Már létezik ilyen e-mail cím!');
      if (existUser) errors.push('Már létezik ilyen felhasználó!');
      if (password1 != password2) errors.push('Jelszavak nem egyeznek!');
      if (username == password1) errors.push('A felhasználónév nem egyezhet meg a jelszóval!');
      if (email == password1) errors.push('Az email cím nem egyezhet meg a jelszóval!');
    }

    if (errors.length > 0) return res.send({ success: false, errors });

    const hashedPassword = await bcrypt.hash(password1, 10);

    User.create({ nev: username, email: email, password: hashedPassword, jogosultsag: 0, reg_token: randomString(32) })
      .then(async (insertedUser) => {
        res.send({ success: true });

        const pm = await ProtonMail.connect({
          username: process.env.PROTON_EMAIL,
          password: process.env.PROTON_PASSWORD,
        });

        await pm.sendEmail({
          to: email,
          subject: 'Regisztráció megerősítése',
          body: 'Verification: http://localhost:3000/auth/register-verification/' + insertedUser.reg_token,
        });

        pm.close();
      })
      .catch((err) => {
        console.log(err);
        res.send({ success: false });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.postRegisterVerification = async (req, res) => {
  try {
    const token = req.params.token;

    const foundToken = await User.findOne({ where: { reg_token: token } });
    if (!foundToken) return res.send({ success: false });

    User.update(
      { reg_token: '' },
      {
        where: {
          reg_token: foundToken.reg_token,
        },
      }
    )
      .then(async (updatedToken) => {
        res.send({ success: true });
      })
      .catch((err) => {
        res.send({ success: false });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    let errors = [];
    if (!email || !password) errors.push('Tölts ki minden mezőt');
    if (errors.length > 0) return res.send({ success: false, errors });

    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) return res.send({ success: false, errors: ['Helytelen e-mail cím vagy jelszó'] });
    const isMatching = await bcrypt.compare(password, foundUser.password);
    if (!isMatching) return res.send({ success: false, errors: ['Helytelen e-mail cím vagy jelszó'] });
    if (foundUser.reg_token) return res.send({ success: false, errors: ['Nem aktiváltad a fiókodat!'] });

    res.send({ success: true, user: foundUser });
  } catch (error) {
    console.log(error);
  }
};
