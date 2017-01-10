
gapCars.controller('detailsCtrl', function ($scope, $location, $rootScope, $routeParams, gapcars) {
	$scope.car = {
		id:0,
		name:"-----",
		brand: "-----",
		image: "img/nocar.jpg",
		price: 0,
		year: 0
	};

	$scope.goToCars = goToCars;

	function init() {
		gapcars.getCars(onGetCarsSuccess);
	}

	function onGetCarsSuccess(response) {
		for (var i in response.data) {
			var car = response.data[i];
			if (car.id == $routeParams.id) {
				$scope.car = car;
				break;
			}
		}
	}

	function goToCars() {
		$location.path('/');
	}

	init();
});