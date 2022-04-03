const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const gameRoutes = require('./game-routes.js');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);

module.exports = router;
