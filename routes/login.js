var express = require('express');
var router = express.Router();
var passport = require('passport');
var utils = require('../config/utils');

// show the login form
router.get('/', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage'), title : 'Login' ,  user : req.user});
});

// process the login form
router.post('/', passport.authenticate('local-login', {
    successRedirect : '/chats', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


module.exports = router;
