/* 
* When a user clicks on an event, she should be able to view more information about that event.
* In the controller EventController, use the events service to load a single event into the $scope.event property. Use $routeParams.id to access a specific event by its index.
*/

app.controller('EventController', ['$scope', 'events', '$routeParams', function($scope, events, $routeParams) {
  events.success(function(data) {
  	// console.log(data);
  	// console.log($routeParams);
  	
  	// using only this one accesses the whole data object as if it were an array (it's not), if $routeParams = 0 then the id would only grab the date...
    // $scope.eventItem = data[$routeParams.id];
    
    // we need to grab the id of the events property within the data object
    $scope.eventItem = data.events[$routeParams.id];
    // console.log($scope.eventItem);
    // console.log(data[$routeParams.id]);
    // console.log(data.events[$routeParams.id]);
  });
}]);