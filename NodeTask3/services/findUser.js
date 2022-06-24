const { User, sequelize } = require("../models");

   async function findUser (id)   {
  const user = await User.findOne({ where: { id } });
  if (user===null) return false;
  return true;
};
module.exports={findUser};
