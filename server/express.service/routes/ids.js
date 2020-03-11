const express = require('express');
const router = express.Router();
const {v4} = require('uuid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(v4());
});

module.exports = router;
