 function serverClients($scope, $http) {

	$scope.renderserviceClients = function(response) { 
		$scope.serviceClients = response;
	};
	
	$http.get('/serviceClients')
    .success($scope.renderserviceClients);

}