const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
const attendRoutes = require('./attend-routes')

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/attend', attendRoutes);

module.exports = router;
