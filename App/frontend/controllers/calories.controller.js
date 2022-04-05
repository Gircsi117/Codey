const axios = require('axios');
require('dotenv').config();

exports.getCaloriesPage = (req, res) => {
  res.render('tools/calories', { cim: 'Kalória táblázat', jog: req.session.user.jogosultsag });
};

exports.getIngredients = (req, res) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3001/kcal/getIngredients',
    headers: { apisecret: process.env.API_SECRET },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
