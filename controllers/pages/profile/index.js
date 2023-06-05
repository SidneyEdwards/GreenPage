const router = require('express').Router();
const { User, Book } = require('../../../models');
const books = require('../../../seeds/bookData.json');

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      raw: true,
    });

    const bookData = await Book.findAll({
      where: {
        user_id: req.session.user_id,
      },
      raw: true,
    });

    const userWithBooks = {
      ...userData,
      books: bookData,
    };

    console.log(userWithBooks);

    res.render('profile', {
      ...userWithBooks,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
