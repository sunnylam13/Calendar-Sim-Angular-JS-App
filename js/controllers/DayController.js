app.controller('DayController', ['$scope', 'events', function($scope, events) {
	// don't forget to change 'forecast.success' to 'SERVICENAME.success'
	// don't forget to include this as a script element in your index.html file or html file
  events.success(function(data) {
    $scope.day = data;
  });
}]);