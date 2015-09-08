(function() {
	/*
	Idea is to have the Question Page retrieve a question and post it there after
	the question has been answered. Like a hungry person stuck to a chair while
	empty plates are swapped with new plates after the food is consumed.
	*/

	/* Have completed questions go to finished page, where they will be graded and 
	total grade will be claculated there. It will be a .length of "correct questions" */
	'use strict';
	angular.module('app', ['ui.router']).config(Config);
	Config.$inject = ["$stateProvider", "$urlRouterProvider"];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home', {
			url: '/',
			templateUrl: '/views/Home.html'
		}).state('Quiz', {
			url:'/Quiz/',
			templateUrl: "/views/questions.html",
			controller: "HomeController",
			controllerAs: "vm"
		}).state('Finished', {
			url:'/finished_questions',
			templateUrl: "/views/finished.html",
			controller: "FinishedController",
			controllerAs: "vm"
		});
		$urlRouterProvider.otherwise('/');
	}
})();