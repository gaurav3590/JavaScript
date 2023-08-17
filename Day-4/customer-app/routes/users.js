var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/authenticate', function (req, res, next) {
  console.log(req.body);
  if (req.body.username == req.body.password && typeof (req.body.username) != 'undefined') {
    res.send({
      result: 'success', msg: "user login successful.", user: {
        id: 674646, name: req.body.username
      }
    });
  } else {
    res.send({ result: 'fail', msg: "user login failed." });
  }
});

router.post('/authenticate', function(req, res, next) {
	console.log(req.body);
	if(req.body.username == req.body.password && req.body.username != undefined){
		req.session.user = req.body.username;
		res.send({result:"success", msg:"user successful login."});
	}else{
		res.send({result:"fail", msg:"Incorrect username or password."});
	}
});

module.exports = router;
