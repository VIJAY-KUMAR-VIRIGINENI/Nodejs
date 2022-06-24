const { User, sequelize } = require("../models");
const authSchema = require("../validations/dataValidation.js").authSchema;
const { findUser } = require("../services/findUser");

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });
    return res.json(user);
  
  } catch (error) {
    res.status(500).json(error);
  }
};

const addUser = async (req, res) => {
  const { name, password, age } = req.body;
  let { error } = authSchema.validate(req.body);
  if (error) {
    res.status(422).send(error.message);
    return;
  }
  try {
    const user = await User.create({ name, password, age, isDeleted: false });
    return res.json(user);
  } catch (err) {
    res.status(500).json(err).send(error.message);
    return;
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    user.name = name;
    user.age = age;
    await user.save();
    return res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id } });
    user.isDeleted = true;
    await user.save();
    return res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getUser: getUser,
  getUserById: getUserById,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
