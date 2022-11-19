var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   { title: 'Home' 
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index',
   { title: 'Home' 
  });
});
/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('cotactus.ejs',
   { title: 'Contact us' 
  });
});
/* GET Current Playlists page. */
router.get('/songs', function(req, res, next) {
  res.render('main.ejs',
   { title: 'Playlists' 
  });
});
module.exports = router;
