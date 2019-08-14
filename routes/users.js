var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
    //some shit lololololo just testing if comments fuck code up somehow x) Result: comments DON'T fuck up code! Comment away (=
  res.send('u R so kewl :3');
});

module.exports = router;
