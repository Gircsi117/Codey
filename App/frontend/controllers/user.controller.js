const axios = require('axios');

exports.getSettingsPage = (req, res) => {
  res.render('tools/settings', {
    cim: "Beállítások",
    jog: req.session.user.jogosultsag,
    user: req.session.user
  });
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
      if(results.data.success){
        req.session.user.nev = username;
        req.session.save();
      }
      return res.send({ data: results.data });
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
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
