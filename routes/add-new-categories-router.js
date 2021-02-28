const express = require('express');
const router = express.Router();


router.post('/', function(req, res, next) {
    return res.status(200).json({ data: req.body, status: 'Ok' });
});


module.exports = router;
