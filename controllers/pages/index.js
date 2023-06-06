const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile');
const home = require('./home');
const add = require('./add');
const login = require('./login');
const signup = require('./signup');
const nav = require('/nav');

router.use('/profile', withAuth, profile);

router.use('/home', withAuth, home);
router.use('/add', withAuth, add);

router.use('/login', login);
router.use('/signup', signup);

router.get('/', (req, res) => {
  return res.render('welcome');
});

module.exports = router;
