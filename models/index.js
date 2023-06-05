const User = require('./User');
const Book = require('./Book');
const Location = require('./Location');

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(Location, {
  foreignKey: 'location_id',
});

Location.hasMany(Book, {
  foreignKey: 'location_id',
});

module.exports = {
  User,
  Book,
  Location,
};
