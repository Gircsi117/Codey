const axios = require('axios');

exports.getCaloriesPage = (req, res) => {
  res.render('tools/calories', {cim:"Home", jog:req.session.user.jogosultsag});
};
