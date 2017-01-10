
gapCars.controller('rootCtrl', function ($scope, $rootScope, $location, gapcars) {

	$scope.isLoading = false;
	$scope.searchText = '';

	$scope.$on('requestStart', function(e) {
		$scope.isLoading = true;
	});

	$scope.$on('requestEnd', function(e) {
		$scope.isLoading = false;
	});

	$scope.onSearch = onSearch;

	function onSearch() {
		$location.path('/q/' + $scope.searchText);
	}
});