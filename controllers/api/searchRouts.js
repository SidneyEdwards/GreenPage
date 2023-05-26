const router = require('express').Router();
const fetch = require("node-fetch");

router.post('/', async (req, res) => {
  const type = req.query.type;
  const query = req.query.q;
  let searchQuery;

  switch (type) {
    case "title":
      searchQuery = `intitle:${query}`;
      break;
    case "author":
      searchQuery = `inauthor:${query}`;
      break;
    case "genre":
      searchQuery = `subject:${query}`;
      break;
    default:
      searchQuery = query;
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyCWtvFe3Pxhm6c2jPKgLDoc5ejk9Onr4iY`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const books = data.items.map(item => {
        const book = item.volumeInfo;

        const title = book.title ? book.title : "Title not available";
        const authors = book.authors
          ? book.authors.join(", ")
          : "Author(s) not available";
        const genre = book.categories
          ? book.categories.join(", ")
          : "Genre not available";
        const description = book.description
          ? book.description
          : "Description not available";
        const image =
          book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : "Image not available";

        return {
          title: title,
          authors: authors,
          genre: genre,
          description: description,
          image: image,
        };
      });

      res.json(books);
    } else {
      res.json({ message: "No books found" });
    }
  } catch (error) {
    res.json({ error: error.toString() });
  }
  
});



module.exports = router;
