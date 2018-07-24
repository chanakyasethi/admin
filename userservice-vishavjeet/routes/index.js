const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CFEX User Service' });
});

module.exports = router;
