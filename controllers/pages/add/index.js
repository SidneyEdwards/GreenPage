const router = require('express').Router();

router.get('/', (req, res) => {

  res.render('add');
});


module.exports = router;
