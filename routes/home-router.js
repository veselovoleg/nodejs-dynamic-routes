const express = require('express');
const router = express.Router();

// Explanation: A nameless path GET request without any parameters.
// We'll learn how to name a path in users route.
router.get('/', function(req, res, next) {
    return res.render('index.html');
});

module.exports = router;
