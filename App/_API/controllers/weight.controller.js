const Weight = require('../models/weight.model');
const User = require('../models/user.model');

exports.postGetWeights = async (req, res) => {
  try {
    const { id } = req.body;

    const allWeights = await Weight.findAll({ order: ['datum'], where: { felhasznalo_id: id } });
    if (!allWeights) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

    res.send({ success: true, allWeights });
  } catch (error) {
    console.log(error);
  }
};

exports.postGetLastWeight = async (req, res) => {
  try {
    const { id } = req.body;

    const lastWeight = await Weight.findAll({ order: ['datum'], where: { felhasznalo_id: id } });
    if (!lastWeight) return res.send({ success: false, error: 'Sikertelen adatlekérés' });

    res.send({ success: true, lastWeight: lastWeight[lastWeight.length-1] });
  } catch (error) {
    console.log(error);
  }
};

exports.postSetGoal = async (req, res) => {
  try {
    const { id, goalWeight } = req.body;

    if (!goalWeight) res.send({ success: false, err: 'Töltsd ki a mezőt' });

    const newGoal = await User.update({ cel_suly: goalWeight }, { where: { id: id } });
    if (!newGoal) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });

    res.send({ success: true });
  } catch (error) {
    Console.log(error);
  }
};

exports.postModifyWeight = async (req, res) => {
  try {
    const { id, weight, date } = req.body;

    if (!weight) res.send({ success: false, error: 'Töltsd ki a mezőt' });

    const foundWeight = await Weight.findOne({ where: { felhasznalo_id: id, datum: date } });
    if (!foundWeight) {
      const newWeight = await Weight.create({ suly: weight, datum: date, felhasznalo_id: id });
      if (!newWeight) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });
    } else {
      const modifyWeight = await foundWeight.update({ suly: weight }, { where: { id: id } });
      if (!modifyWeight) return res.send({ success: false, error: 'Sikertelen adatmódosítás' });
    }

    res.send({ success: true });
  } catch (error) {
    Console.log(error);
  }
};
