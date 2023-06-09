const router = require('express').Router();
const { Book, Location, User } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({
      where: {
        available: true
      },
      include: [
        // {model: Location},
        {model: User}
      ],
    });
    res.json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        // {model: Location},
        {model: User}
      ],
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// localhost:3001/api/book
router.post('/', async (req, res) => {
  try {
    console.log('hit')
    console.log(req.body)
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.authors,
      description: req.body.description,
      genre: req.body.genre,
      available: req.body.available,
      image: req.body.image,
      // user_id: req.session.user_id,
      location_id: req.body.location_id,
      bookId: req.body.bookId,
    });

    res.status(200).json(newBook);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.update({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      available: req.body.available,
      user_id: req.body.user_id,
      location_id: req.body.location_id,
      bookId: req.body.bookId,
    }, 
    {
      where: {
        id: req.params.id
      }
    });

    if (updatedBook[0] === 0) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    const updatedBookData = await Book.findByPk(req.params.id);

    res.status(200).json(updatedBookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// localhost:3001/api/book/api/book
router.post('/create', async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      available: true,  
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id
      }
    });

    if (bookData === 0) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;


