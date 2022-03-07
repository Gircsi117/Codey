const { default: axios } = require("axios");

exports.getDashboardPage = (req, res) => {
  res.render('dashboard/index', {cim:"Home", jog:req.session.user.jogosultsag});
};

exports.postGetDashboardData = (req, res)=>{
  const { date } = req.body;
  const id = req.session.user.id;
  
  axios.all([
    axios({
      method: 'POST',
      url: 'http://localhost:3001/getWaterByUser',
      headers: {apisecret: 123},
      data: {id, date}
    }),
  
    axios({
      method: 'POST',
      url: 'http://localhost:3001/getSportByUser',
      headers: {apisecret: 123},
      data: {id, date}
    }),
  
    axios({
      method: 'POST',
      url: 'http://localhost:3001/getFoodsByUser',
      headers: {apisecret: 123},
      data: {id}
    })
  ]).then(axios.spread((waterArray, sportArray, foodArray)=>{
    res.send({
      waters: waterArray.data.waters,
      sports: sportArray.data.sports,
      foods: foodArray.data.foodArray
    })
  }))
}

exports.postWater = (req, res)=>{
  const {mennyiseg, date} = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postWaterByUser',
    headers: {apisecret: 123},
    data: {id, mennyiseg, date}
  })
  .then((results)=>{
    return res.send({success: true});
  })
  .catch((err)=>{
    console.log(err);
  })
}

exports.postSport = (req, res)=>{
  const {mennyiseg, date} = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postSportByUser',
    headers: {apisecret: 123},
    data: {id, mennyiseg, date}
  })
  .then((results)=>{
    return res.send({success: true});
  })
  .catch((err)=>{
    console.log(err);
  })
}

exports.postFood = (req, res)=>{
  const {food} = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/postFoodByUser',
    headers: {apisecret: 123},
    data: {id, food}
  })
  .then((results)=>{
    return res.send({success: true});
  })
  .catch((err)=>{
    console.log(err);
  })
}


