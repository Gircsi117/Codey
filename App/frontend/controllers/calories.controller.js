const axios = require('axios');

exports.getCaloriesPage = (req, res) => {
  res.render('tools/calories', {cim: "Kalória táblázat", jog: req.session.user.jogosultsag});
};

exports.getIngredients = (req, res) => {
  console.log("Alma");
  axios({
    method: 'GET',
    url: 'http://localhost:3001/kcal/getIngredients',
    headers: { apisecret: 123 },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

