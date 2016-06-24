var express = require('express');
var router = express.Router();
var utils = require('../config/utils');

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/',utils.isLoggedIn, function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
