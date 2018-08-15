var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/contact.html', function(req, res, next) { //|||||||||||||||||||| takes the 404 error away if I type /contact at the web address |||||||||||||||||||||||||||||||||||
  res.render('contact', { title: 'Contact' });
});

router.get('/project.html', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

module.exports = router;
