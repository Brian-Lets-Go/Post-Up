const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.signedUp) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

module.exports = router;

