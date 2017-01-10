
gapCars.factory('gapcars',[
	'$http', '$rootScope',
	function ($http, $rootScope) {

		return {
			getCars: getCars
		};

		function getCars(onSuccess) {
			get('/json/cars.json', onSuccess);
		}

		function fail(response) {
			$rootScope.$broadcast('requestEnd',{});
		}

		function success(response, onSuccess) {
			onSuccess(response);
			$rootScope.$broadcast('requestEnd',{});
		}

		function request(method, url, data, onSuccess) {
			$rootScope.$broadcast('requestStart',{});
			setTimeout(function () {
				var req = {
					method: method,
					url:url,
					data: data,
					headers:{
						'Accept':'application/json'
					}
				};
				
				$http(req).then(function (response) {
					success(response,onSuccess);
				}, function(response) {
					fail(response);
				});
			}, 1000);
			
		}

		function post(url, data, onSuccess) {
			request("POST", url, data, onSuccess);
		}

		function put(url, data, onSuccess) {
			request("PUT", url, data, onSuccess);
		}

		function get(url, onSuccess) {
			request("GET",url,null,onSuccess);
		}

		function del(url, onSuccess) {
			request("DELETE",url,null,onSuccess);
		}
	}
]);