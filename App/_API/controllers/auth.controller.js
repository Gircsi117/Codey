const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const ProtonMail = require('protonmail-api');

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
  const { email, username, password1, password2 } = req.body;

  let errors = [];

  if (!email || !username || !password1 || !password2) errors.push('Tölts ki minden mezőt');
  if (errors.length < 1) {
    const existEmail = await User.findOne({ where: { email } });
    const existUser = await User.findOne({ where: { nev: username } });
    if (existEmail) errors.push('Már létezik ilyen e-mail cím');
    if (existUser) errors.push('Már létezik ilyen felhasználó');
    if (password1 != password2) errors.push('Jelszavak nem egyeznek');
  }

  if (errors.length > 0) return res.send({ success: false, errors });

  const hashedPassword = await bcrypt.hash(password1, 10);

  User.create({ nev: username, email: email, password: hashedPassword, jogosultsag: 0, reg_token: randomString(32) })
    .then(async (insertedUser) => {
      res.send({ success: true });

      const pm = await ProtonMail.connect({
        username: 'codeyhealth@protonmail.com',
        password: 'Codeyhealth123',
      });

      await pm.sendEmail({
        to: email,
        subject: 'Regisztráció megerősítése',
        body: 'Verification: http://localhost:3000/auth/register-verification/' + insertedUser.reg_token,
      });

      pm.close();
    })
    .catch((err) => {
      res.send({ success: false });
    });
};

exports.postRegisterVerification = async (req, res) => {
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
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  let errors = [];
  if (!email || !password) errors.push('Tölts ki minden mezőt');
  if (errors.length > 0) return res.send({ success: false, errors });

  const foundUser = await User.findOne({ where: { email } });
  if (!foundUser) return res.send({ success: false, errors: ['Helytelen e-mail cím vagy jelszó'] });
  const isMatching = await bcrypt.compare(password, foundUser.password);
  if (!isMatching) return res.send({ success: false, errors: ['Helytelen e-mail cím vagy jelszó'] });

  res.send({ success: true, user: foundUser });
};
