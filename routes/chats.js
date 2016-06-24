var express = require('express');
var router = express.Router();
var utils = require('../config/utils');

/* GET users listing. */
router.get('/',utils.isLoggedIn, function(req, res) {
  res.render('chats', { title: 'Users',   user : req.user, });
});

module.exports = router;
