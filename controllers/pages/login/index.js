const router = require('express').Router();

router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
    console.log("User is already logged-in.")
  }

  res.render('login');
});


module.exports = router;
