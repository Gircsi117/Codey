const FoodXIngredient = require('../models/foodXingredient.model');
const Food = require('../models/food.model');
const Ingredients = require('../models/ingredient.model');
const Sport = require('../models/sport.model');
const Water = require('../models/water.model');

exports.postGetFoodsByUser = async (req, res) => {
  try {
    const { id, eatenToday } = req.body;
    let query = { felhasznalo_id: id };

    if (eatenToday != false) query = [{ felhasznalo_id: id }, { hozzadva: new Date() }];

    const foods = await Food.findAll({ where: query, order: ['hozzadva'] });

    let foodsArray = [];

    for await (const food of foods) {
      const foodAssoc = await FoodXIngredient.findAll({ where: { etel_id: food.id } });

      foodsArray.push({ id: food.id, name: food.nev, hozzavalok: [], kcal: [], date: food.hozzadva });

      for await (const foodAssocDetail of foodAssoc) {
        const ing = await Ingredients.findOne({ where: { id: foodAssocDetail.hozzavalo_id } });

        const foodIndex = foodsArray.findIndex((food) => {
          return food.id == foodAssocDetail.etel_id;
        });

        foodsArray[foodIndex].hozzavalok.push(ing);
        foodsArray[foodIndex].kcal.push({ kcal: ing.kcal, multiplier: foodAssocDetail.adag_szorzo });
      }
    }

    let kcalData = { totalKcal: 0, foodsArray: [] };

    for (let food of foodsArray) {
      let foodKcal = 0;
      for (const ingDetail of food.kcal) {
        foodKcal += ingDetail.kcal * ingDetail.multiplier;
      }
      kcalData.foodsArray.push({ kcal: foodKcal, food: food });
      kcalData.totalKcal += foodKcal;
    }

    let foodDate = {};
    for (const food of kcalData.foodsArray) {
      if (!foodDate.hasOwnProperty(food.food.date)) {
        foodDate[food.food.date] = [];
      }
      foodDate[food.food.date].push({ foodsArray: food });
    }

    return res.send({ success: true, foodArray: eatenToday ? foodsArray : foodDate });
  } catch (error) {
    console.log(error);
  }
};

exports.postGetSportByUser = async (req, res) => {
  try {
    const { id, useToday } = req.body;
    let query = { felhasznalo_id: id };

    if (useToday != false) query = [{ felhasznalo_id: id, datum: new Date() }];
    const sports = await Sport.findAll({ where: query, order: ['datum'] });

    return res.send({ success: true, sports: sports });
  } catch (error) {
    console.log(error);
  }
};

exports.postGetWaterByUser = async (req, res) => {
  try {
    const { id, drinkToday } = req.body;
    let query = { felhasznalo_id: id };

    if (drinkToday != false) query = [{ felhasznalo_id: id }, { datum: new Date() }];
    const waters = await Water.findAll({ where: query, order: ['datum'] });

    return res.send({ success: true, waters: waters });
  } catch (error) {
    console.log(error);
  }
};

exports.postWaterByUser = async (req, res) => {
  try {
    const { id, mennyiseg, date } = req.body;

    const foundItem = await Water.findOne({ where: { felhasznalo_id: id, datum: date } });

    if (!foundItem) {
      const item = await Water.create({
        mennyiseg: mennyiseg,
        datum: date,
        felhasznalo_id: id,
      });
      return res.send({ success: true, item: item });
    }

    const item = await Water.update({ mennyiseg: foundItem.mennyiseg + mennyiseg }, { where: { felhasznalo_id: id, datum: date } });
    return res.send({ success: true, item: item });
  } catch (error) {
    console.log(error);
  }
};

exports.postSportByUser = async (req, res) => {
  try {
    const { id, mennyiseg, date } = req.body;

    const foundItem = await Sport.findOne({ where: { felhasznalo_id: id, datum: date } });

    if (!foundItem) {
      const item = await Sport.create({
        mennyiseg: mennyiseg,
        datum: date,
        felhasznalo_id: id,
      });
      return res.send({ success: true, item: item });
    }

    const item = await Sport.update({ mennyiseg: foundItem.mennyiseg + mennyiseg }, { where: { felhasznalo_id: id, datum: date } });
    return res.send({ success: true, item: item });
  } catch (error) {
    console.log(error);
  }
};

exports.postFoodByUser = async (req, res) => {
  try {
    const { id, food } = req.body;

    const newFood = await Food.create({
      nev: food.name,
      hozzadva: food.date,
      felhasznalo_id: id,
    });

    if (!newFood) return res.send({ success: false });

    food.hozzavalok.forEach((element) => {
      FoodXIngredient.create({
        etel_id: newFood.id,
        hozzavalo_id: element.hozzavalo_id,
        adag_szorzo: element.szorzo,
      });
    });

    return res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredients.findAll();

    return res.send({ success: true, ingredients });
  } catch (error) {
    console.log(error);
  }
};
