var express = require('express');
var router = express.Router();
var utils = require('../config/utils');

/* GET users listing. */
router.get('/', utils.isLoggedIn, function(req, res) {
  res.render('offlineMessages', { title: 'Users',  user : req.user });
});

module.exports = router;
