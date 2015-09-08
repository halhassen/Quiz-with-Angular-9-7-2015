(function() {
	'use strict';
	angular.module('app')
	.controller('QuestionController', QuestionController);

	QuestionController.$inject = ['HomeFactory', '$state'];

	function QuestionController(HomeFactory, $state) {
		var vm = this;
		vm.title = 'Welcome to a quiz!';
		vm.quiz = function() {
			$state.go('Question');
			var questions = [
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
			];
		};

	}
})();