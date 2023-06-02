const router = require("express").Router();
const { Book, User, Location } = require("../../models") 
const withAuth = require("../../utils/auth")

// router.get("/", async (req, res) => {

// })

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;