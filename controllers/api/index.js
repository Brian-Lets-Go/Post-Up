const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);

module.exports = router;
