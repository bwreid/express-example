var express = require('express');
var router = express.Router();

var items = require('./items')
router.use('/items', items);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;