const { default: axios } = require("axios");

exports.getBlogsPage = (req, res)=>{
    res.render('admin/blogs', {cim: "Blogok"});
}

exports.getIngredientsPage = (req, res)=>{
    res.render('admin/ingredients', {cim: "Hozzávalók"});
}

exports.getUsersPage = (req, res)=>{
    res.render('admin/users', {cim: "Felhasználók"});
}

exports.postGetAllUser = async (req, res)=>{
    const id = req.session.user.id;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/getAllUserData',
        headers: {apisecret: 123},
        data: {id}
    })
    .then((results)=>{
        return res.send({success: true, users: results.data.users});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postDeleteUser = async (req, res)=>{
    const {id} = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/deleteUser',
        headers: {apisecret: 123},
        data: {id}
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postSetUserData = async (req, res)=>{
    const { id, username, email, status, magassag, suly, cel } = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/setUserData',
        headers: {apisecret: 123},
        data: {id, username, email, status, magassag, suly, cel}
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getAllIngredient = async (req, res)=>{
    axios({
        method: 'GET',
        url: 'http://localhost:3001/admin/getAllIngredient',
        headers: {apisecret: 123}
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postNewIngredient = async (req, res)=>{
    const { nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban } = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/newIngredient',
        headers: {apisecret: 123},
        data: { nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban }
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postSetIngredient = async (req, res)=>{
    const { id, nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban } = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/setIngredient',
        headers: {apisecret: 123},
        data: { id, nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban }
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postDeleteIngredient = async (req, res)=>{
    const { id } = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/deleteIngredient',
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

exports.getAllBlogData = async (req, res)=>{
    axios({
        method: 'GET',
        url: 'http://localhost:3001/admin/getAllBlogData',
        headers: {apisecret: 123}
    })
    .then((results)=>{
        return res.send({success: true, blogs: results.data.blogs});
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.postSetBlogStatus = async (req, res)=>{
    const { id, status } = req.body;

    axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/setBlogStatus',
        headers: {apisecret: 123},
        data: { id, status }
    })
    .then((results)=>{
        return res.send({data: results.data});
    })
    .catch((err)=>{
        console.log(err);
    })
}