const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchRoutes = require('./searchRouts');
const bookRoutes = require('./bookRoutes');

router.use('/users', userRoutes);
router.use('/search', searchRoutes);
router.use('/book', bookRoutes);


module.exports = router;
