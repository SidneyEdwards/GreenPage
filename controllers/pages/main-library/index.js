const router = require('express').Router();

router.get('/', (req, res) => {

  res.render('/mainlibrary');
});


module.exports = router;