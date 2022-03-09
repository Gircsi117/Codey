const axios = require('axios');

exports.getDiaryPage = (req, res) => {
  res.render('tools/diary', {cim: "Étkezési napló", jog: req.session.user.jogosultsag});
};
