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
db.QuestionDatabase.push(new Question('Which rapper said this?: "Why is the sky blue, why is water wet, why did Judas rat to Romans while Jesus slept?"', "Drake", "Mos Def", "Ghostface Killah", "Jay-Z", "Ghostface Killah"));
db.QuestionDatabase.push(new Question('Who made this quiz?', "Pau Gasol", "George Bush", "Jidenna", "Hamad Alhassen", "Hamad Alhassen"));
db.QuestionDatabase.push(new Question("Which of the following movies did NOT come out in the 21st century?", "Juice", "Mad Max: Fury Road", "Chef", "Kung Fu Hustle", "Juice"));
db.QuestionDatabase.push(new Question("Who won the 2001 NBA MVP award?", "Chris Kaman", "Allen Iverson", "Connie Hawkins", "Lavoy Allen", "Allen Iverson"));
db.QuestionDatabase.push(new Question("Which of the following is objectively the best food?", "A burrito", "A pizza", "A peanut butter & jelly sandwich", "Quinoa", "A burrito"));

//Will use for a future part of the app, such as calling individual questions for their own page
db.findQuestion = function(id, cb) {
	for(var i = 0; i < db.QuestionDatabase.length; i += 1) {
		if(db.QuestionDatabase[i]._id.equals(id)) {
			return cb(null, db.QuestionDatabase);
		}
	}
	cb('The random question with an id of ' + id + ' does not exist!');
}
//Future use
db.showQuestion = function(question, cb) {
	var newQuestion = new Question(question.ask, question.a1, question.a2, question.a3, question.a4, question.correct);
	db.QuestionDatabase.push(newQuestion);
	cb(null, newQuestion)
};

module.exports = db;
