var express = require('express');
var router = express.Router();
let email = require('../controllers/emailController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send', email.send)


module.exports = router;
