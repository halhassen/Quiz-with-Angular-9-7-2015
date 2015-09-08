(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.questions = [];

		//This will be for grabbing individual questions if I wanted to do one per page
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
				q.resolve();
			});
			return q.promise;
		};



		o.getQuestions();
		return o;
	}
})();