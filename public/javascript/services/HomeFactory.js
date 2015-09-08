(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.questions = [];

		/* o.getQuestion = function(id) {
			var q = $q.defer();
			$http.get('/questions/' + id).success(function(res) {
				q.resolve(res);
			}).error(function() {
				q.reject()
			});
			return q.promise;
		}; */

		o.getQuestions = function() {
			var q = $q.defer();
			$http.get('/Quiz').success(function(res) {
				//pushes res array into show array
				console.log(res);
				o.questions = res;
				console.log(o.questions);
				q.resolve();
			});
			return q.promise;
		};

		/* [
		{
			ask: "What is 1 + 1", 
			a1: "2",
			a2: "3",
			a3: "4",
			a4: "5",
			correct: "2"
		}, 
		{
			ask: "What is 2 + 2", 
			a1: "2",
			a2: "3",
			a3: "4",
			a4: "5",
			correct: "4"
		}
		]; */

		o.getQuestions();
		return o;
	}
})();