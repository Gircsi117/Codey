const axios = require('axios');

exports.getDiaryPage = (req, res) => {
  res.render('tools/diary', {cim: "Étkezési napló", jog: req.session.user.jogosultsag});
};

exports.getWeights = (req, res)=>{
  const id = req.session.user.id;

  axios({
    method: 'POST',
    url: 'http://localhost:3001/weight/postGetWeights',
    headers: {apisecret: 123},
    data: { id }
})
.then((results)=>{
    return res.send({data: results.data});
})
.catch((err)=>{
    console.log(err);
})
}
