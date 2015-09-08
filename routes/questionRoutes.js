var express = require('express');
var router = express.Router();
var questions = require('../models/db');

//figure out routes
//questions need to be retrieved, one by one!
	//idea is to have it all on the same page
//submit button sends it to "admin page", where they will eventually be tallied
//after 5th question, a result is printed!
router.use(function(req, res, next) {
	console.log(req.method + ' : ' + req.path + ' was retrieved');
	next();
});

router.param('id', function(req, res, next, id) {
	questions.findQuestion(req.params.id, function(err, question) {
		if(err) return next({err: err, type: 'client'});
		req.question = question;
		next();
	})
});

//Get /questions
router.get('/Quiz', function(req, res) {
	console.log(questions.QuestionDatabase);
	res.send(questions.QuestionDatabase)
});

//Get /finished
router.get('/finished', function(req, res) {
	console.log("Finished!")
})


module.exports = router;