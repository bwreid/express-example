var express = require('express');
var router = express.Router();
var storage = require('../models/itemLibrary.js');

router.get('/', function (req, res, next) {
  res.render('items/index', { title: 'Shopping List', items: storage.items });
})

router.get('/:id', function (req, res, next) {
  var item = storage.find(req.params.id);
  if ( item ) { res.send(200, { status: 200, item: item }) }
  else { res.send('Item ' + req.params.id + ' does not exist.') };
});

router.post('/', function (req, res, next) {
  var item = storage.create(req.body.name);
  if ( req.body['form-request'] ) {
    res.redirect('/items');  
  } else {
    if ( item ) { res.send(200, { status: 200, item: item }) }
    else { res.send('Item ' + req.params.id + ' does not exist.') };
  }
});

router.put('/:id', function (req, res, next) {
  var item = storage.update(req.params.id, req.body.name);
  if ( item ) { res.send(200, { status: 200, item: item}) }
  else { res.send('Item ' + req.params.id + ' does not exist.') };
});

router.delete('/:id', function (req, res, next) {
  var item = storage.delete(req.params.id);
  if ( item ) { res.send(200, { status: 200, item: item[0]}) }
  else { res.send('Item ' + req.params.id + ' does not exist.') };
});

module.exports = router;