const User = require("../models/user.model");
const FoodXIngredient = require("../models/foodXingredient.model");
const Food = require("../models/food.model");
const Ingredients = require("../models/ingredient.model");
const Sport = require("../models/sport.model");
const Water = require("../models/water.model");

exports.postGetFoodsByUser = async (req, res) => {
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

    return res.send({ success: true, foodArray: foodsArray });
};

exports.postGetSportByUser = async (req, res) => {
    const { id, date } = req.body;

    const sports = await Sport.findAll({where: {felhasznalo_id: id, datum: date}});

    return res.send({success: true, sports : sports});
}

exports.postGetWaterByUser = async (req, res) => {
    const { id, date } = req.body;

    const waters = await Water.findAll({where: {felhasznalo_id: id, datum: date}});
    //console.log(waters);

    return res.send({success: true, waters : waters[0]});
}

exports.postWaterByUser = async (req, res)=>{
    const {id, mennyiseg, date} = req.body;
    
    const foundItem = await Water.findOne({where: {felhasznalo_id: id, datum: date}})

    if (!foundItem) {
        const item = await Water.create({
            mennyiseg: mennyiseg,
            datum: date,
            felhasznalo_id: id 
        });
        return res.send({success: true, item: item});
    }

    const item = await Water.update({mennyiseg: foundItem.mennyiseg + mennyiseg}, {where: {felhasznalo_id: id, datum: date}});
    return res.send({success: true, item: item});
}

exports.postSportByUser = async (req, res)=>{
    const {id, mennyiseg, date} = req.body;
    
    const foundItem = await Sport.findOne({where: {felhasznalo_id: id, datum: date}})

    if (!foundItem) {
        const item = await Sport.create({
            mennyiseg: mennyiseg,
            datum: date,
            felhasznalo_id: id 
        });
        return res.send({success: true, item: item});
    }

    const item = await Sport.update({mennyiseg: foundItem.mennyiseg + mennyiseg}, {where: {felhasznalo_id: id, datum: date}});
    return res.send({success: true, item: item});
}

exports.postFoodByUser = (req, res)=>{
    
}