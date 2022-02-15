const { default: axios } = require("axios");

exports.getDashboardPage = (req, res) => {
  res.render('dashboard/index');
};

exports.postGetDashboardData = (req, res)=>{
  const { date } = req.body;
  const id = req.session.user.id;
  
  axios({
    method: 'POST',
    url: 'http://localhost:3001/getWater',
    headers: {apisecret: 123},
    data: {id, date}
  })
  .then((results)=>{
    return res.send({success: true, data: results});
  })
  .catch((err)=>{
    console.log(err);
  })

}
