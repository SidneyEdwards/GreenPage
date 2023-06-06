const router = require('express').Router();
const { Book, User } = require('../../../models');

router.get('/', async (req, res) => {
  try {
    console.log('hit ------------')
    const bookData = await Book.findAll({
      include: [User],
      where: {
        available: true
      }
    });
    const books = bookData.map((book) => book.get({ plain: true }));

    res.render('mainlibrary', {
      logged_in: req.session.logged_in,
      books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
