const axios = require('axios');
require('dotenv').config();

exports.getGraphsPage = (req, res) => {
  res.render('tools/graphs', { cim: 'Grafikonok', jog: req.session.user.jogosultsag });
};
