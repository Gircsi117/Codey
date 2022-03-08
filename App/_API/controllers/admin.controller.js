const User = require('../models/user.model');
const Ingredients = require('../models/ingredient.model');
const Blog = require('../models/blog.model');

const { Op } = require('sequelize');

exports.postGetAllUserData = async (req, res) => {
  try {
    const { id } = req.body;

    const users = await User.findAll({ where: { id: { [Op.not]: id } }, attributes: { exclude: ['password'] } });
    return res.send({ success: true, users: users });
  } catch (error) {
    console.log(error);
  }
};

exports.postDeleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.send({ success: false, err: 'Felhasználó nem található!' });

    const deleted = await user.destroy();
    if (!deleted) return res.send({ success: false, err: 'A felhasználó adatainak törlése sikertelen!' });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postSetUserData = async (req, res) => {
  try {
    const { id, username, email, nem, status, magassag, cel } = req.body;

    let errors = [];

    if (!email || !username || !status) errors.push('Tölts ki minden mezőt');

    if (errors.length < 1) {
      const existEmail = await User.findOne({ where: { email: email, id: { [Op.not]: id } } });
      const existUser = await User.findOne({ where: { nev: username, id: { [Op.not]: id } } });

      if (existEmail) errors.push('Már létezik ilyen e-mail cím');
      if (existUser) errors.push('Már létezik ilyen felhasználó');
    }

    if (errors.length > 0) return res.send({ success: false, errors });

    const user = await User.update(
      {
        nev: username,
        email: email,
        jogosultsag: status,
        nem: nem == '' || nem == null ? null : nem,
        magassag: magassag == '' || magassag == null ? null : magassag,
        cel_suly: cel == '' || cel == null ? null : cel,
      },
      { where: { id: id } }
    );

    if (!user) return res.send({ success: false, err: 'Sikertelen adatmódosítás' });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postNewIngredients = async (req, res) => {
  try {
    const { nev, kcal, feherje, szenhidrat, zsir, ehetoe_magaban } = req.body;

    const newIngredients = await Ingredients.create({
      nev: nev,
      kcal: kcal,
      feherje: feherje,
      szenhidrat: szenhidrat,
      zsir: zsir,
      ehetoe_magaban: ehetoe_magaban,
    });
    console.log(newIngredients);
    if (!newIngredients) return res.send({ success: false, err: 'Sikertelen felvétel!' });

    return res.send({ success: true, ing: newIngredients });
  } catch (error) {
    console.log(error);
  }
};

exports.postDeleteIngredient = async (req, res) => {
  try {
    const { id } = req.body;

    const ingredient = await Ingredients.findOne({ where: { id: id } });
    if (!ingredient) return res.send({ success: false, err: 'A hozzávaló nem található!' });

    const deleted = await ingredient.destroy();
    if (!deleted) return res.send({ success: false, err: 'A hozzávaló adatainak törlése sikertelen!' });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postSetIngredient = async (req, res) => {
  try {
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

    if (!updated) return res.send({ success: false, err: 'Sikertelen adatmódosítás!' });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllIngredient = async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll();
    if (!ingredients) return res.send({ success: false });

    return res.send({ success: true, ingredients: ingredients });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllBlogData = async (req, res) => {
  try {
    const blogs = await Blog.findAll();

    if (!blogs) return res.send({ success: false });

    res.send({ success: true, blogs: blogs });
  } catch (error) {
    console.log(error);
  }
};

exports.postSetBlogStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    const blog = await Blog.update(
      {
        status: status,
      },
      { where: { id: id } }
    );

    if (!blog) return res.send({ success: false, err: 'Sikertelen adatmódosítás!' });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};
