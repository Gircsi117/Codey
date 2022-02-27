const User = require('../models/user.model');
const FoodXIngredient = require('../models/foodXingredient.model');
const Food = require('../models/food.model');
const Ingredients = require('../models/ingredient.model');

exports.postSetGoal = async (req, res) => {
  const { id, goalWeight } = req.body;

  if (!goalWeight) res.send({ success: false, err: 'Töltsd ki a mezőt' });

  const newGoal = await User.update({ cel_suly: goalWeight }, { where: { id: id } });
  if (!newGoal) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};

exports.postModifyWeight = async (req, res) => {
  const { id, weight } = req.body;

  if (!weight) res.send({ success: false, error: 'Töltsd ki a mezőt' });

  const newWeight = await User.update({ suly: weight }, { where: { id: id } });
  if (!newWeight) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

  res.send({ success: true });
};

//TODO ezt revizálni
exports.postGetMealDiaryUser = async (req, res) => {
  const { id } = req.body;

  const foods = await Food.findAll({ where: { felhasznalo_id: id } });

  let foodsArray = [];

  for await (const food of foods) {
    const foodAssoc = await FoodXIngredient.findAll({ where: { etel_id: food.id } });

    foodsArray.push({ id: food.id, name: food.nev, hozzavalok: [] });

    for await (const foodAssocDetail of foodAssoc) {
      const ing = await Ingredients.findOne({ where: { id: foodAssocDetail.hozzavalo_id } });

      const foodIndex = foodsArray.findIndex((food) => {
        return food.id == foodAssocDetail.etel_id;
      });

      foodsArray[foodIndex].hozzavalok.push(ing);
    }
  }

  res.send({ success: true, foodArray: foodsArray });
};

exports.postGetIngredients = async (req, res) => {
  const ingredients = await Ingredients.findAll();

  res.send({ success: true, ingredients });
};

//TODO saját ételek

//TODO kalória táblázat
