const axios = require('axios');

exports.getGoalPage = (req, res) => {
  res.render('tools/goal', {
    cim: "Cél meghatározása",
    jog: req.session.user.jogosultsag,
    cel:req.session.user.cel_suly,
    nem:req.session.user.nem,
    magas:req.session.user.magassag
  });
};

exports.postSetGoal = (req, res) => {
  const { goalWeight } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postSetGoal',
    headers: { apisecret: 123 },
    data: { id, goalWeight },
  })
    .then((results) => {
      req.session.user.cel_suly = goalWeight;
      req.session.save();
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postModifyWeight = (req, res) => {
  const { weight, date } = req.body;
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postModifyWeight',
    headers: { apisecret: 123 },
    data: { id, weight, date },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLastWeight = (req, res)=>{
  const id = req.session.user.id;
  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postGetLastWeight',
    headers: { apisecret: 123 },
    data: { id },
  })
    .then((results) => {
      return res.send({ data: results.data });
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.setBodyData = async (req, res)=>{
  const {userHeight, userGender} = req.body;
  const id = req.session.user.id;

  await axios.all([
    axios({
      method: 'POST',
      url: 'http://localhost:3001/user/postSetHeight',
      headers: { apisecret: 123 },
      data: { id, userHeight },
    }),
    axios({
      method: 'POST',
      url: 'http://localhost:3001/user/postSetGender',
      headers: { apisecret: 123 },
      data: { id, userGender },
    })
  ])
  .then(axios.spread((height, gender)=>{
    req.session.user.magassag = userHeight;
    req.session.user.nem = userGender;
    req.session.save();
    res.send({success:true});
  }))
}