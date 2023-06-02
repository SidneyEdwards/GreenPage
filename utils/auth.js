const withAuth = (req, res, next) => {
  console.log('withAuth\n');
  console.log(req.session);
  if (!req.session.logged_in) {
    console.log("------redirect-------");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
