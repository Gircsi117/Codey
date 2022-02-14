const User = require("../models/user.model");
const FoodXIngredient = require("../models/foodXingredient.model");
const Food = require("../models/food.model");
const Ingredients = require("../models/ingredient.model");

exports.postGetFoodsByUser = async (req, res) => {
    const { id } = req.body;

    const foods = await Food.findAll({ where: { felhasznalo_id: id } });

    let foodsArray = [];

    for await (const food of foods) {
        const foodAssoc = await FoodXIngredient.findAll({ where: { etel_id: food.id } });

        foodsArray.push({ id: food.id, hozzavalok: [] });

        for await (const foodAssocDetail of foodAssoc) {
            const ing = await Ingredients.findOne({ where: { id: foodAssocDetail.hozzavalo_id } });

            const foodIndex = foodsArray.findIndex((food) => {
                return food.id == foodAssocDetail.etel_id;
            });

            foodsArray[foodIndex].hozzavalok.push(ing);
        }
    }

    return res.send({ success: true, foodsArray: foodsArray });
};

exports.postGetSport = async (req, res) => {
    //TODO
}

exports.postGetWater = async (req, res) => {
    //TODO
}