var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('casa', { title: 'parte casa' });
});

module.exports = router;
