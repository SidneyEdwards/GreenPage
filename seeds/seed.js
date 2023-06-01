const sequelize = require('../config/connection');
const { User } = require('../models');
const { Book } = require('../models');
//const { Location } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
//const locationData = require('./locationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const books = await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  // const locations = await Location.bulkCreate(locationData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
