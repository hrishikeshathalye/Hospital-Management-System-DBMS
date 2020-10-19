var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{id: 1, username: "nick"},
  {id: 2, username: "admin"}]);
});

module.exports = router;
