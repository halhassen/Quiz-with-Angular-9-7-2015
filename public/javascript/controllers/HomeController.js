(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory', '$state'];

	function HomeController(HomeFactory, $state) {
		var vm = this;
		vm.questions = HomeFactory.questions; 
		vm.title = 'Welcome to a quiz!';
		vm.startQuiz = function() {
			$state.go('Quiz');
			console.log(HomeFactory.questions);
			console.log(vm.questions)
		}
	}
})();