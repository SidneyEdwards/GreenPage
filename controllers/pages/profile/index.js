const router = require('express').Router();
const { User, Book } = require('../../../models');
const books = require('../../../seeds/bookData.json')

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{
        model: Book
      }],
      raw: true,
      nest: true,
    });

    console.log(userData);

    res.render('profile', {
      ...userData,
      books,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
