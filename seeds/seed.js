const sequelize = require('../config/connection');
const seedBooks = require('./book-seed.js')
const { User } = require('../models');
const { Book } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- Books SEEDED -----\n');

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const books = await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};


seedDatabase();
