
gapCars.controller('compareCtrl', function ($scope, $rootScope, $location, $routeParams, gapcars) {
	var noCar = {
		id: 0,
		name: '----',
		image: '/img/nocar.jpg',
		name: '-----',
		brand: '-----',
		price: '-----',
		year: '-----'
	};

	$scope.cars = [
		noCar, noCar, noCar
	];

	function init() {
		gapcars.getCars(onGetCarsSuccess);
	}

	function onGetCarsSuccess(response) {
		for (var i in response.data) {
			var car = response.data[i];
			if      (car.id == $routeParams.id1) $scope.cars[0] = car;
			else if (car.id == $routeParams.id2) $scope.cars[1] = car;
			else if (car.id == $routeParams.id3) $scope.cars[2] = car;
		} 
	}

	init();
});