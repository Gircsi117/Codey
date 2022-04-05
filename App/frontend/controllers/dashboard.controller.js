const axios = require('axios');
require('dotenv').config();

exports.getDashboardPage = (req, res) => {
  res.render('dashboard/index', { cim: 'Home', jog: req.session.user.jogosultsag });
};

exports.postGetDashboardData = async (req, res) => {
  const { drinkToday, useToday, eatenToday } = req.body;
  const id = req.session.user.id;
  await axios
    .all([
      axios({
        method: 'POST',
        url: 'http://localhost:3001/kcal/getWaterByUser',
        headers: { apisecret: process.env.API_SECRET },
        data: { id, drinkToday },
      }),

      axios({
        method: 'POST',
        url: 'http://localhost:3001/kcal/getSportByUser',
        headers: { apisecret: process.env.API_SECRET },
        data: { id, useToday },
      }),

      axios({
        method: 'POST',
        url: 'http://localhost:3001/kcal/getFoodsByUser',
        headers: { apisecret: process.env.API_SECRET },
        data: { id, eatenToday },
      }),
    ])
    .then(
      axios.spread((waterArray, sportArray, foodArray) => {
        res.send({
          waters: waterArray.data.waters,
          sports: sportArray.data.sports,
          foods: foodArray.data.foodArray,
        });
      })
    );
};

exports.postWater = (req, res) => {
  const { mennyiseg, date } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postWaterByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id, mennyiseg, date },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSport = (req, res) => {
  const { mennyiseg, date } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postSportByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id, mennyiseg, date },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postFood = (req, res) => {
  const { food } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postFoodByUser',
    headers: { apisecret: process.env.API_SECRET },
    data: { id, food },
  })
    .then((results) => {
      return res.send({ success: true });
    })
    .catch((err) => {
      console.log(err);
    });
};
