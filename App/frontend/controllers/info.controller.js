const { default: axios } = require("axios");

exports.getBlogPage = async (req, res)=>{
    res.render('info/blogok');
}

exports.getGyakoriPage = async (req, res)=>{
    res.render('info/gyik');
}

exports.getKaloriarolPage = async (req, res)=>{
    res.render('info/kaloriarol');
}

exports.getRolunkPage = async (req, res)=>{
    res.render('info/rolunk');
}

exports.postBlog = async (req, res)=>{
    const { cim, tartalom, idopont } = req.body;
    const felhasznalo_id = req.session.user.id;

    axios({
        method:'POST',
        url:"http://localhost:3001/blog/postBlog",
        headers: {apisecret: 123},
        data:{
            felhasznalo_id,
            cim,
            tartalom,
            idopont
        }
    })
    .then((response)=>{
        res.send({data: response.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getAllActiveBlog = async (req, res)=>{
    axios({
        method:'GET',
        url:"http://localhost:3001/blog/getAllActiveBlog",
        headers: {apisecret: 123}
    })
    .then((response)=>{
        res.send({data: response.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}