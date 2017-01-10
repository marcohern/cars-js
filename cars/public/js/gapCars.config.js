gapCars.config([
	'$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$routeProvider
		.when('/', { 
			controller:'indexCtrl', 
			templateUrl:'/js/templates/index.html'
		})
		.when('/q/:brand', { 
			controller:'indexCtrl', 
			templateUrl:'/js/templates/index.html'
		})
		.when('/details/:id', { 
			controller:'detailsCtrl', 
			templateUrl:'/js/templates/details.html'
		})
		.when('/compare/:id1/:id2', { 
			controller:'compareCtrl', 
			templateUrl:'/js/templates/compare.html'
		})
		.when('/compare/:id1/:id2/:id3', { 
			controller:'compareCtrl', 
			templateUrl:'/js/templates/compare.html'
		})
		.otherwise('/');
	}
]).run(function ($rootScope, $location) {
	
});