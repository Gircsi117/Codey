const axios = require('axios');

exports.getGoalPage = (req, res) => {
  res.render('tools/goal', {cim:"Home", jog:req.session.user.jogosultsag});
};
