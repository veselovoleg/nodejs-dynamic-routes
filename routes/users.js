const express = require('express');
const router = express.Router();

const data = [
    {
        name: 'Bibi',
    },
    {
        name: 'Colt',
    },
    {
        name: 'Jessie',
    }
]

router.get('/', function(req, res, next) {
    return res.json({ message: 'Users Index', data: data });
});


router.get('/Bibi', function(req, res, next) {
    // req.originalUrl === '/users/Bibi'
    const name = req.originalUrl.split('/')[2];
    const user = data.filter(u => u.name == name);

    return res.json({ message: 'User Show', data: user });
});

router.get('/Colt', function(req, res, next) {
    // req.originalUrl === '/users/Colt'
    const name = req.originalUrl.split('/')[2];
    const user = data.filter(u => u.name == name);

    return res.json({ message: 'User Show', data: user });
});

router.get('/Jessie', function(req, res, next) {
    // req.originalUrl === '/users/Jessie'
    const name = req.originalUrl.split('/')[2];
    const user = data.filter(u => u.name == name);

    return res.json({ message: 'User Show', data: user });
});

router.get('/dynamic/:name', function(req, res, next) {
    const name = req.params.name;
    const user = data.find(u => u.name == name );

    return res.json({ message: 'Users Show', data: user ? user : 'User not found' });
});

module.exports = router;
