const axios = require('axios');
require('dotenv').config();

exports.getDiaryPage = (req, res) => {
  res.render('tools/diary', {cim: "Étkezési napló", jog: req.session.user.jogosultsag});
};

exports.getWeights = (req, res)=>{
  const id = req.session.user.id;

  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postGetWeights',
    headers: {apisecret: process.env.API_SECRET},
    data: { id }
})
.then((results)=>{
    return res.send({data: results.data});
})
.catch((err)=>{
    console.log(err);
})
}
