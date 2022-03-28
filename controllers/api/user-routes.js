const router = require('express').Router();

router.post('/login', (req, res) => {
    console.log(req.body);
    res.json('login info');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.json('signup info');
});

module.exports = router;
