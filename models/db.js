var Guid = require('guid');
var db = {};

//c1 through a4 are answers for the questions, with c1 being the correct answer
//answers will be randomzied

var Question = function(ask, a1, a2, a3, a4, correct) {
	this.ask = ask;
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.a4 = a4;
	this.correct = correct;
	this._id = Guid.create();
};

db.QuestionDatabase = [];
db.QuestionDatabase.push(new Question("What is 1 + 1?", "2", "3", "4", "5", "2"));
db.QuestionDatabase.push(new Question("What is 2 + 1?", "2", "3", "4", "5", "3"));
db.QuestionDatabase.push(new Question("What is 3 - 1?", "2", "3", "4", "5", "2"));
db.QuestionDatabase.push(new Question("What is 1 + 4?", "2", "3", "4", "5", "5"));

db.findQuestion = function(id, cb) {
	for(var i = 0; i < db.QuestionDatabase.length; i += 1) {
		if(db.QuestionDatabase[i]._id.equals(id)) {
			return cb(null, db.QuestionDatabase);
		}
	}
	cb('The random question with an id of ' + id + ' does not exist!');
}

db.showQuestion = function(question, cb) {
	var newQuestion = new Question(question.ask, question.a1, question.a2, question.a3, question.a4, question.correct);
	db.QuestionDatabase.push(newQuestion);
	cb(null, newQuestion)
};

module.exports = db;
