const axios = require('axios');
require('dotenv').config();

exports.getBlogPage = async (req, res) => {
    res.render('info/blogok', { cim: 'Blog', jog: req.session.user.jogosultsag });
};

exports.getGyakoriPage = async (req, res) => {
    res.render('info/gyik', { cim: 'Gyakran ismételt kérdések', jog: req.session.user.jogosultsag });
};

exports.getKaloriarolPage = async (req, res) => {
    res.render('info/kaloriarol', { cim: 'Kalóriaszámlálásról', jog: req.session.user.jogosultsag });
};

exports.getRolunkPage = async (req, res) => {
    res.render('info/rolunk', { cim: 'Rólunk', jog: req.session.user.jogosultsag });
};

exports.postBlog = async (req, res) => {
    const { cim, tartalom } = req.body;
    const felhasznalo_id = req.session.user.id;
    const idopont = new Date();

    axios({
        method: 'POST',
        url: 'http://localhost:3001/blog/postBlog',
        headers: { apisecret: process.env.API_SECRET },
        data: {
            felhasznalo_id,
            cim,
            tartalom,
            idopont,
        },
    })
        .then((response) => {
            res.send({ data: response.data, user: req.session.user.nev });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getAllActiveBlog = async (req, res) => {
    axios({
        method: 'GET',
        url: 'http://localhost:3001/blog/getAllActiveBlog',
        headers: { apisecret: process.env.API_SECRET },
    })
        .then((response) => {
            res.send({ data: response.data });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getBlogByUser = async (req, res) => {
    const id = req.session.user.id;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/blog/postGetBlogByUser',
        headers: { apisecret: process.env.API_SECRET },
        data: {
            id,
        },
    })
        .then((response) => {
            res.send({ data: response.data });
        })
        .catch((err) => {
            console.log(err);
        });
};
