var express = require('express');
var router = express.Router();

/* GET page for creating a new message. */
router.get('/', function(req, res, next) {
    res.render('form');
});

module.exports = router;
