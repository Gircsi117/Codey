const axios = require('axios');

exports.getDiaryPage = (req, res) => {
  res.render('tools/diary', {cim:"Home", jog:req.session.user.jogosultsag});
};
