var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', {title: 'Login'});
});

// router.get('/account', auth.ensureAuthenticated, function(req, res, next) {
//   res.render('account', {
//     title: 'Account',
//     name: req.user.displayName,
//     user: JSON.stringify(req.user)
//   });
// });

module.exports = router;
