// const router = require("express").Router();
// const { Book, User, Location } = require("../../models") 
// const withAuth = require("../../utils/auth")

// router.get('/home', async (req, res) => {
//   try {
//     const bookData = await Book.findAll({ include: [User] });
//     const books = bookData.map((book) => book.get({ plain: true }));

//     res.render('mainlibrary', {
//       logged_in: req.session.logged_in,
//       books,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// router.get("/signup", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("signup");
// });

// module.exports = router;