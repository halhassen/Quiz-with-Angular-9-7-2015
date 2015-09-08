(function() {
	'use strict';
	angular.module('app').controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory', '$state'];

	function HomeController(HomeFactory, $state) {
		var vm = this;
		vm.grade = HomeFactory.grade;
		vm.questions = HomeFactory.questions; 
		vm.startQuiz = function() {
			$state.go('Quiz');
			console.log(HomeFactory.questions); //testing the functionality
			console.log(vm.questions) //more testing
		};

		vm.grades = function(answers) {
			$state.go('Finished');
			var count = 0;
			for(var prop in answers) {
				/* This for-in loop checks the answers selected and sees if they are correct 
				If so, the user's score increases */
				if (answers[prop] === vm.questions[prop].correct) {
					count++
				};
			};
			console.log(count);
			//The below is necessary because we need to somewhere to place the grade when the Controller refreshes
			HomeFactory.grade = vm.grade; 
			if (count === 0) {
				vm.grade = "You got none of the questions correct :( I advise you to try again."
			}
			else{
				vm.grade = "You got " + (count / vm.questions.length) * 100 + "% of the questions correct!"
			};
			HomeFactory.grade = vm.grade;

			console.log(vm.grade);
		};
		vm.restart = function() {
			$state.go('Home');
		}
	};
})();