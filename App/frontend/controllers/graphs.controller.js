const axios = require('axios');

exports.getGraphsPage = (req, res) => {
  res.render('tools/graphs', {cim: "Grafikonok", jog: req.session.user.jogosultsag});
};
