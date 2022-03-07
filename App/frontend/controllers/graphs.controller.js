const axios = require('axios');

exports.getGraphsPage = (req, res) => {
  res.render('tools/graphs', {cim:"Home", jog:req.session.user.jogosultsag});
};
