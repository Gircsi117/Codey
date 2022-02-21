const User = require('../models/user.model');
const FoodXIngredient = require('../models/foodXingredient.model');
const Food = require('../models/food.model');
const Ingredients = require('../models/ingredient.model');
const Sport = require('../models/sport.model');
const Water = require('../models/water.model');
const Blog = require('../models/blog.model');

const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

exports.postGetAllUserData = async (req, res) => {
    const { id } = req.body;

    const users = await User.findAll({ where: { id: { [Op.not]: id } } });
    return res.send({ succes: true, users: users });
};

exports.postDeleteUser = async (req, res) => {
    const { id } = req.body;

    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.send({ succes: false, err: 'Felhasználó nem található!' });

    const deleted = await user.destroy();
    if (!deleted) return res.send({ succes: false, err: 'A felhasználó adatainak törlése sikertelen!' });

    return res.send({ succes: true });
};

exports.postSetUserData = async (req, res) => {
    const { id, username, email, status, magassag, suly, cel } = req.body;

    let errors = [];

    if (!email || !username || !status) errors.push('Tölts ki minden mezőt');

    if (errors.length < 1) {
        const existEmail = await User.findOne({ where: { email: email, id: {[Op.not]:id} } });
        const existUser = await User.findOne({ where: { nev: username, id: {[Op.not]:id} } });

        if (existEmail) errors.push('Már létezik ilyen e-mail cím');
        if (existUser) errors.push('Már létezik ilyen felhasználó');
    }

    if (errors.length > 0) return res.send({ success: false, errors });

    const user = await User.update(
        {
            nev: username,
            email: email,
            jogosultsag: status,
            magassag: magassag,
            suly: suly,
            cel_suly: cel,
        },
        { where: { id: id } }
    );

    if (!user) return res.send({ succes: false, err: 'Sikertelen adatmódosítás' });

    return res.send({succes: true});
};

exports.postNewIngredients = async (req, res) => {
    const { nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban } = req.body;

    const newIngredients = await Ingredients.create({
        nev: nev,
        kcal: kcal,
        feherje: feherje,
        szenhidrat: szenhidrat,
        zsir: zsir,
        ehetoe_magaban: ehetoe_magaban,
    });

    if (!newIngredients) return res.send({ succes: false, err: 'Sikertelen felvétel!' });

    return res.send({ succes: true });
};

exports.postDeleteIngredient = async (req, res) => {
    const { id } = req.body;

    const ingredient = await Ingredients.findOne({ where: { id: id } });
    if (!ingredient) return res.send({ succes: false, err: 'A hozzávaló nem található!' });

    const deleted = await ingredient.destroy();
    if (!deleted) return res.send({ succes: false, err: 'A hozzávaló adatainak törlése sikertelen!' });

    return res.send({ succes: true });
};

exports.postSetIngredient = async (req, res) => {
    const { id, nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban } = req.body;

    const updated = await Ingredients.update(
        {
            nev: nev,
            kcal: kcal,
            feherje: feherje,
            szenhidrat: szenhidrat,
            zsir: zsir,
            ehetoe_magaban: ehetoe_magaban,
        },
        { where: { id: id } }
    );

    if (!updated) return res.send({ succes: false, err: 'Sikertelen adatmódosítás!' });

    return res.send({ succes: true });
};

exports.postGetAllBlogData = async (req, res)=>{
    //TODO csináld meg a blog adatok lekérését!!!
}

exports.postSetBlogStatus = async (req, res) => {
    const { id, status } = req.body;

    const blog = await Blog.update(
        {
            status: status,
        },
        { where: { id: id } }
    );

    if (!blog) return res.send({ succes: false, err: 'Sikertelen adatmódosítás!' });

    return res.send({ succes: true });
};
