const router = require('express').Router();
const { User, Book } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('create user ---------------');
    const userData = await User.create(req.body);

    req.session.user_id = userData.id;
    req.session.username = userData.username;

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/library/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.status(401).json({ message: 'Please log in first' });
      return;
    }

    const bookData = await Book.findByPk(req.params.id);
    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    bookData.available = false;
    await bookData.save();

    const user = await User.findByPk(req.session.user_id);
    await user.addBook(bookData);

    res.status(200).json({ message: 'Book added to library successfully.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.toString() });
  }
});

router.post('/library/:id/return', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    const user = await User.findByPk(req.session.user_id);

    await user.removeBook(bookData);

    bookData.available = true;
    await bookData.save();

    res.status(200).json({ message: 'Book returned successfully.' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.toString() });
  }
});

router.get('/home', async (req, res) => {
  const books = await Book.findAll({ where: { available: true } });
  res.render('home', { books });
});

router.get('/profile', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    const user = await User.findByPk(req.session.user_id);
    const books = await user.getBooks();

    res.render('profile', {
      books: books.map((book) => book.get({ plain: true })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('\n------ login -----\n');

    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.user_id = userData.id;
    req.session.first_name = userData.first_name;
    req.session.last_name = userData.last_name;
    req.session.email = userData.email;
    req.session.logged_in = true;

    res.json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(err);
    res.status(404).end();
  }
});

module.exports = router;
