
gapCars.controller('indexCtrl', function ($scope, $filter, $rootScope, $location, $routeParams, gapcars) {

	console.log("indexCtrl");

	$scope.cars = {};

	$scope.toggleCompare = toggleCompare;
	$scope.goToCompare = goToCompare;

	$scope.disableCompare = false;
	$scope.disableCompareButton = true;

	var carCompareCount = 0;
	var compare = [];

	function init() {
		gapcars.getCars(onGetCarsSuccess);
	}

	function onGetCarsSuccess(response) {
		var data = response.data;
		if ($routeParams.brand) data = $filter('filter')(data, {brand:$routeParams.brand});
		$scope.cars = $filter('orderBy')(data, '+name');
		
	}

	function toggleCompare(car) {
		car.compare = (car.compare) ? false : true;
		if (car.compare) carCompareCount++;
		else carCompareCount--;

		if (car.compare) {
			compare[car.id] = car.id;
		} else {
			delete compare[car.id];
		}

		if (carCompareCount>1) $scope.disableCompareButton=false;
		else $scope.disableCompareButton=true;

		if (carCompareCount===3) $scope.disableCompare = true;
		else $scope.disableCompare = false;

	}

	function goToCompare() {
		var url = '/compare';
		for (var i in compare) {
			url += '/' + i;
		}
		$location.path(url);
	}

	init();
});