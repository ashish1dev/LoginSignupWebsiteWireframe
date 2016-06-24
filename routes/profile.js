var express = require('express');
var router = express.Router();
var utils = require('../config/utils');

// PROFILE SECTION =========================
router.get('/', utils.isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user,
      title : 'profile'
    });
});




module.exports = router;
