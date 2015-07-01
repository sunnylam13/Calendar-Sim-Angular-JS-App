// insert 'ngRoute' to make it available for use
var app = angular.module('CalendarApp', ['ngRoute']);

// define the app's routes
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'DayController', 
      templateUrl: 'views/day.html' 
    })
    .when('/:id',{
    	// this '/:id' specifies that if you click on the item it takes it to another page for more details about the called object...  take a look at events.json
    	controller: 'EventController', 
    	templateUrl: 'views/event.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
