const FoodXIngredient = require('../models/foodXingredient.model');
const Food = require('../models/food.model');
const Ingredients = require('../models/ingredient.model');
const Sport = require('../models/sport.model');
const Water = require('../models/water.model');

exports.postGetFoodsByUser = async (req, res) => {
  const { id, showAll, filterByDate } = req.body;

  let query = { felhasznalo_id: id };
  if (showAll == false) query.hozzadva = new Date();

  const foods = await Food.findAll({ where: query });

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
  if (filterByDate) {
    for (const food of kcalData.foodsArray) {
      if (!foodDate.hasOwnProperty(food.food.date)) {
        foodDate[food.food.date] = [];
      }
      foodDate[food.food.date].push({ foodsArray: food });
    }
    console.log(foodDate);
  }
  return res.send({ success: true, foodDate });
};

exports.postGetSportByUser = async (req, res) => {
  const { id, date } = req.body;

  const sports = await Sport.findAll({ where: { felhasznalo_id: id, datum: date } });

  return res.send({ success: true, sports: sports });
};

exports.postGetWaterByUser = async (req, res) => {
  const { id, date } = req.body;

  const waters = await Water.findAll({ where: { felhasznalo_id: id, datum: date } });
  //console.log(waters);

  return res.send({ success: true, waters: waters[0] });
};

exports.postWaterByUser = async (req, res) => {
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
};

exports.postSportByUser = async (req, res) => {
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
};

exports.postFoodByUser = async (req, res) => {
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
};
